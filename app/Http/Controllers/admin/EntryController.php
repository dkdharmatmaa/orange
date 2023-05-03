<?php

namespace App\Http\Controllers\admin;
set_time_limit(6000);
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Entry;
use App\Transaction;
use App\Installment;
use Illuminate\Support\Facades\Validator;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Barryvdh\DomPDF\Facade\Pdf;
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
        $data=Entry::with('product','branch','transaction')->where('id',$id)->first();
        return json_encode($data);
    }
    public function get_installment($id){
        $data=Installment::where('subscription_refid',$id)->orderBy('actual_debit_date','desc')->get(['id','invoice_number','transaction_id','subscription_refid','debit_amount','actual_debit_date','payment_status']);
        return $data;
    }
    public function all_installment(Request $request){
        $data=Installment::with('transaction.entry')->where([['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->orderBy('created_at', 'desc')->get(['id','invoice_number','transaction_id','subscription_refid','debit_amount','actual_debit_date','payment_status']);
        return json_encode($data);
    }
    //for offline payment
    public function store_offline(Request $request){
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

        $entry=new Entry();
        $entry->transaction_id="T".auth()->user()->id.time();
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
        $entry->payment_by=auth()->user()->name;
        $entry->payment_status='Success';
        $entry->save();
        // ==========Sending mail invoice==========
        if($entry->is_email){
            $email=$entry->email;
            Mail::send( ['html' => 'payment-invoice'], ['amount'=>$entry->advance_payment,'trans_id'=>$entry->transaction_id], function ($message) use ($email) {
                $message->to($email)
                    ->subject("Orange Theory Fitness payment receipt");
            });
        }
        if($entry){
            return response()->json(['status'=>true,'msg'=>'Data inserted successfully']);
        }
        else{
           return response()->json(['status'=>false,'msg'=>'Incorrect parameters passed']);
        } 
    }

    //for online payment+mandate payment
    public function store_online_payment(Request $request){
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
        $rand_number=auth()->user()->id.time();
        $first_name=explode(" ",$request->name)[0];
        $send_link=true;
        //first insert transaction
        $transaction=new Transaction();
        $transaction->customer_refid="cust".$rand_number;
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
        $entry->payment_by=auth()->user()->name;
        $entry->payment_status='Pending';
        $entry->save();

        //for online payment
        $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
        $secretkey=env('security_key');
        $order_date=date_format(new \DateTime(), DATE_W3C);
        $order_timestamp=strtotime($order_date);
        if($request->payment_method=='payment'){
            $payload = [
                'mercid' => env('merchant_id'),
                'orderid' => $orderid,
                'amount' => $entry->advance_payment.".00",
                'order_date' => $order_date,
                'currency' => "356",
                'ru' => env("response_url"),
                'itemcode' => "DIRECT",
                "device" => [
                    'init_channel' => 'internet',
                    'ip' => env('ip_address'),
                    'user_agent' => 'Mozilla/5.0'
                ],
                "invoice"=>[
                    "invoice_number"=>"INV".$rand_number,
                    "invoice_display_number"=>"INV".$rand_number,
                    "customer_name"=>$first_name,
                    "invoice_date"=>$order_date,
                    "gst_details"=>[
                    "cgst"=>"0.00",
                    "sgst"=>"0.00",
                    "igst"=>"0.00",
                    "gst"=>"0.00",
                    "cess"=>"0.00",
                    "gstincentive"=>"0.00",
                    "gstpct"=>"0.00",
                    "gstin"=>""
                    ]
                ],
                "additional_info"=>[
                    "additional_info1"=>$entry->email,
                ]        
            ];
        }
        else{
            $payload = [
                'mercid' => env('merchant_id'),
                'orderid' => $orderid,
                'amount' => $entry->advance_payment.".00",
                'order_date' => $order_date,
                'currency' => "356",
                'ru' => env("response_url"),
                'itemcode' => "DIRECT",
                "device" => [
                    'init_channel' => 'internet',
                    'ip' => env('ip_address'),
                    'user_agent' => 'Mozilla/5.0'
                ],
                "mandate"=>[
                    "mercid"=>env('merchant_id'),
                    "currency"=>"356",
                    "amount"=>$transaction->installment_amount.".00",
                    "customer_refid"=>$transaction->customer_refid,
                    "subscription_refid"=>"Sub".$rand_number,
                    "subscription_desc"=>"Term insurance by Orange theory fitness",
                    "start_date"=>$transaction->installment_from,
                    "end_date"=>$transaction->installment_to,
                    "frequency"=>$transaction->frequency,
                    "amount_type"=>"max",
                    "recurrence_rule"=>"after",
                    "debit_day"=>"1"
                ],
                "invoice"=>[
                    "invoice_number"=>"INV".$rand_number,
                    "invoice_display_number"=>"INV".$rand_number,
                    "customer_name"=>$first_name,
                    "invoice_date"=>$order_date,
                    "gst_details"=>[
                    "cgst"=>"0.00",
                    "sgst"=>"0.00",
                    "igst"=>"0.00",
                    "gst"=>"0.00",
                    "cess"=>"0.00",
                    "gstincentive"=>"0.00",
                    "gstpct"=>"0.00",
                    "gstin"=>""
                    ]
                ],
                "additional_info"=>[
                    "additional_info1"=>$entry->email,
                ]   
            ];
        }
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
                $transaction_update->auth_id=$bd_order_id;
                $transaction_update->save();
                if($request->send_link){
                    $send_link=false;
                    $user['to'] = $entry->email;
                    $content = env('APP_URL')."/api-view/".$orderid;
                    Mail::raw($content, function ($message) use ($user) {
                        $message->to($user['to']);
                        $message->subject('Payment link of Orange Theory Fitness plan');
                    });
                }
            } else { // Response error
                return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"false",'msg'=>"Response error"]);
            }
                            
        } catch (\Exception $e) {
            return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"false",'msg'=>'Return signature validation FAILED']);
        }

        if($entry && $transaction){
            return response()->json(['status'=>true,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"$send_link",'msg'=>'Data inserted successfully']);
        }
        else{
           return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"false",'msg'=>'Incorrect parameters passed']);
        } 
    }

    //for online only mandate payment
    public function store_online_mandate(Request $request){
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
        $rand_number=auth()->user()->id.time();
        $first_name=explode(" ",$request->name)[0];
        $send_link=true;
        //first insert transaction
        $transaction=new Transaction();
        $transaction->customer_refid="cust".$rand_number;
        $transaction->order_id=$orderid;
        $transaction->installment_from=explode("T",$request->installment_from)[0];
        $transaction->installment_to=explode("T",$request->installment_to)[0];
        $transaction->installment_amount=$request->installment_amount;
        $transaction->no_of_installment=$request->no_of_installment;
        $transaction->payment_installment="EMI";
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
        $entry->advance_payment=0;
        $entry->recurring_amount=$request->recurring_amount;
        $entry->branch_id=$request->branch_id;
        $entry->comment=$request->comment;
        if($request->is_email)
        $entry->is_email=$request->is_email;
        $entry->payment_by=auth()->user()->name;
        $entry->payment_status='Pending';
        $entry->save();

        //for online payment
        $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
        $secretkey=env('security_key');
        $order_date=date_format(new \DateTime(), DATE_W3C);
        $order_timestamp=strtotime($order_date);
        $payload = [
            "mercid"=>env('merchant_id'),
            "customer_refid"=>$transaction->customer_refid,
            "subscription_refid"=>"Sub".$rand_number,
            "subscription_desc"=>"Term insurance by Orange theory fitness",
            "currency"=>"356",
            "frequency"=>$transaction->frequency,
            "amount_type"=>"max",
            "amount"=>$transaction->installment_amount.".00",
            "start_date"=>$transaction->installment_from,
            "end_date"=>$transaction->installment_to,
            "recurrence_rule"=>"after",
            "debit_day"=>"1",
            "ru"=>env("response_url_only"),            
            "device" => [
                'init_channel' => 'internet',
                'ip' => env('ip_address'),
                'user_agent' => 'Mozilla/5.0'
            ],
            "customer"=>[
                "first_name"=>$entry->name,
                "mobile"=>$entry->phone_number,
                "email"=>$entry->email,
            ],                
            "invoice"=>[
                "invoice_number"=>"INV".$rand_number,
                "invoice_display_number"=>"INV".$rand_number,
                "customer_name"=>$first_name,
                "invoice_date"=>$order_date,
                "gst_details"=>[
                "cgst"=>"0.00",
                "sgst"=>"0.00",
                "igst"=>"0.00",
                "gst"=>"0.00",
                "cess"=>"0.00",
                "gstincentive"=>"0.00",
                "gstpct"=>"0.00",
                "gstin"=>""
                ]
            ],
            "additional_info"=>[
                "additional_info1"=>$entry->email,
                "additional_info2"=>$orderid,
            ]   
        ];

        $curl_payload = JWT::encode($payload, $secretkey, "HS256", null ,$headers);
        $ch = curl_init("https://pguat.billdesk.io/pgsi/ve1_2/mandatetokens/create");
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
            if ($result_decoded->status == 'initiated') {
                $mandate_token_id = $result_array['links'][1]->parameters->mandate_tokenid;
                $auth_token = $result_array['links'][1]->headers->authorization;
                $transaction_update=Transaction::find($transaction->id);
                $transaction_update->auth_token=$auth_token;
                $transaction_update->auth_id=$mandate_token_id;
                $transaction_update->save();
                if($request->send_link){
                    $send_link=false;
                    $user['to'] = $entry->email;
                    $content = env('APP_URL')."/api-view-only/".$orderid;
                    Mail::raw($content, function ($message) use ($user) {
                        $message->to($user['to']);
                        $message->subject('Payment link of Orange Theory Fitness plan');
                    });
                }
            } else { // Response error
                return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"false",'msg'=>"Response error"]);
            }
                            
        } catch (\Exception $e) {
            return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"false",'msg'=>'Return signature validation FAILED']);
        }

        if($entry && $transaction){
            return response()->json(['status'=>true,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"$send_link",'msg'=>'Data inserted successfully']);
        }
        else{
           return response()->json(['status'=>false,'payment_type'=>$request->payment_type,'order_id'=>$orderid,'call_type'=>"false",'msg'=>'Incorrect parameters passed']);
        } 
    }
}
