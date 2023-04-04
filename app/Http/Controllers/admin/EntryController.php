<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Entry;
use App\Transaction;
use Illuminate\Support\Facades\Validator;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Http;
class EntryController extends Controller
{
    //
    public function index(Request $request){
        if($request->membership_type){
            $data=Entry::with('product','branch')->where([['product_id',$request->membership_type],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','transaction_id','name','membership_price','payment_type','product_id','branch_id','payment_status','payment_by','created_at')->orderBy('created_at', 'desc')->get();
        }
        else{
            $data=Entry::with('product','branch')->where([['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','transaction_id','name','membership_price','payment_type','product_id','branch_id','payment_status','payment_by','created_at')->orderBy('created_at', 'desc')->get();
        }
        return json_encode($data);
    }
    public function index_single($id){
        $data=Entry::with('product','branch')->where('id',$id)->first();
        return json_encode($data);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'date' => ['required'],
            'mbo_id' => ['required'],
            'email' => ['required','email'],
            'phone_number' => ['required','regex:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/'],
            'product_id' => ['required','integer'],
            'payment_type' => ['required'],
            'frequency' => ['required'],
            'membership_price' => ['required'],
            'branch_id' => ['required','integer'],
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        //creating order id
        $orderid=uniqid();

        //first insert transaction
        $transaction=new Transaction();
        $transaction->customer_refid="cust".auth()->user()->id.time();
        $transaction->order_id=$orderid;
        if($request->installment_amount){
            $transaction->installment_from=explode("T",$request->installment_from)[0];
            $transaction->installment_to=explode("T",$request->installment_to)[0];
            $transaction->installment_amount=$request->installment_amount;
            $transaction->no_of_installment=$request->no_of_installment;
            $transaction->payment_installment="EMI";
        }
        else{
            $transaction->payment_installment="oneTime";
        }
        $transaction->frequency=$request->frequency;
        $transaction->save();

        $entry=new Entry();
        $entry->transaction_id=$transaction->id;
        $entry->name=$request->name;
        $entry->date=explode("T",$request->date)[0];
        $entry->mbo_id=$request->mbo_id;
        $entry->email=$request->email;
        $entry->phone_number=$request->phone_number;
        $entry->product_id=$request->product_id;
        $entry->payment_type=$request->payment_type;
        $entry->membership_price=$request->membership_price;
        if($request->advance_payment)
        $entry->advance_payment=$request->advance_payment;
        else
        $entry->advance_payment=$request->membership_price;
        $entry->recurring_amount=$request->recurring_amount;
        $entry->branch_id=$request->branch_id;
        $entry->comment=$request->comment;
        if($request->is_email)
        $entry->is_email=$request->is_email;
        $entry->payment_by=$request->name;
        if($request->payment_type=='Online'){
        $entry->payment_status='Pending';
        }
        else{
        $entry->payment_status='Success';
        }
        $entry->save();

        //for online payment
        if($request->payment_type=='Online'){
            $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
            $secretkey=env('security_key');
            $order_date=date_format(new \DateTime(), DATE_W3C);
            $order_timestamp=strtotime($order_date);
            $payload = [
                'mercid' => env('merchant_id'),
                'orderid' => $orderid,
                'amount' => $entry->advance_payment,
                'order_date' => $order_date,
                'currency' => "356",
                'ru' => "https://ot.brandshark.in/paymentresponse",
                'itemcode' => "DIRECT",
                "device" => [
                    'init_channel' => 'internet',
                    'ip' => env('ip_address'),
                    'user_agent' => 'Mozilla/5.0'
                ],
            ];
            $curl_payload = JWT::encode($payload, $secretkey, "HS256", null ,$headers);
            $ch = curl_init( "https://pguat.billdesk.io/payments/ve1_2/orders/create" );
            $ch_headers = array(
                "Content-Type: application/jose",
                "accept: application/jose",
                "BD-Traceid: $orderid",
                "BD-Timestamp: $order_timestamp"
            );
            curl_setopt( $ch, CURLOPT_HTTPHEADER, $ch_headers);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt( $ch, CURLOPT_POSTFIELDS, $curl_payload);
            curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
                                
            $result = curl_exec($ch);
            curl_close($ch);  
            // Billdesk Response
        try { 
            $result_decoded = JWT::decode($result, new Key($secretkey, 'HS256'));
            $result_array = (array) $result_decoded;
            if ($result_decoded->status == 'ACTIVE') {
                $bd_order_id = $result_array['links'][1]->parameters->bdorderid;
                $auth_token = $result_array['links'][1]->headers->authorization;
                $transaction_update=Transaction::find($transaction->id);
                $transaction_update->auth_token=$auth_token;
                $transaction_update->bd_order_id=$bd_order_id;
                $transaction_update->save();
            } else { // Response error
                return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'msg'=>"Response error"]);
            }
                            
        } catch (\Exception $e) {
            return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'msg'=>'Return signature validation FAILED']);
        }
        }

        if($entry && $transaction){
            return response()->json(['status'=>true,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'msg'=>'Data inserted successfully']);
        }
        else{
           return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'msg'=>'Incorrect parameters passed']);
        } 
    }
}
