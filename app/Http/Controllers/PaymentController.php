<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Transaction;
use App\Entry;
class PaymentController extends Controller
{
    public function createOrderId(){
        $headers = ["alg" => "HS256", "clientid" => "bduatv2ktk", "kid" => "HMAC"];
        $secretkey=env('security_key');
        $orderid=uniqid();
        $order_date=date_format(new \DateTime(), DATE_W3C);
        $order_timestamp=strtotime($order_date);
        $payload = [
            'mercid' => "BDUATV2KTK",
            'orderid' => $orderid,
            'amount' => "2.00",
            'order_date' => $order_date,
            'currency' => "356",
            'ru' => "https://ot.brandshark.in/paymentresponse",
            'itemcode' => "DIRECT",
            "device" => [
                'init_channel' => 'internet',
                'ip' => "3.111.85.79",
                'user_agent' => 'Mozilla/5.0'
            ],
            "mandate"=>[
                "mercid"=>"BDUATV2KTK",
                "currency"=>"356",
                "amount"=>"1.00",
                "customer_refid"=>"cust12345",
                "subscription_refid"=>"Sub".time(),
                "subscription_desc"=>"Term insurance by dhiraj",
                "start_date"=>"2023-04-10",
                "end_date"=>"2023-12-10",
                "frequency"=>"mnth",
                "amount_type"=>"max",
                "recurrence_rule"=>"on",
                "debit_day"=>"6"
            ],
        ];
        /*****************************************/
            // Encode payload
        /*****************************************/

        $curl_payload = JWT::encode($payload, $secretkey, "HS256", null ,$headers);
        
        /*****************************************/
            // Submit to Billdesk
        /*****************************************/
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

        /*****************************************/
            // Billdesk Response
        /*****************************************/

        try { 
            $result_decoded = JWT::decode($result, new Key($secretkey, 'HS256'));
            $result_array = (array) $result_decoded;
            echo "<pre>";
            print_r($result_array);
            echo "</pre>";
            die();
            if ($result_decoded->status == 'ACTIVE') {
                $transaction_id = $result_array['links'][1]->parameters->bdorderid;
                $merchant_id = $result_array['links'][1]->parameters->mercid;
                $auth_token = $result_array['links'][1]->headers->authorization;

                return view('apiView',compact('transaction_id','auth_token','merchant_id'));
            } else { // Response error
                echo "Response error";
            }
                            
        } catch (\Exception $e) {
            echo "<br><br>Return signature validation FAILED: $e";
        }
    }

    public function payment_response(Request $request){
        $tx = "";
        $secretkey=env('security_key');
        if(!empty($request->all())) { 
            $tx_array = $request->all();
            if (isset($tx_array['transaction_response'])) {
                $tx = $tx_array['transaction_response'];
            }
        } else {
            echo "<br><br>Invalid call<br>";
            die();
        }

        // Signature validation
        try { 
            $result_decoded = JWT::decode($tx, new Key($secretkey, 'HS256')); 
        } catch (\Exception $e) {
            echo "<br><br>Invalid response<br>";
            die();
        }
        // Process info
        $transactionid = $result_decoded->transactionid;  
        $retrieve_status=$this->retrieve_transaction($transactionid);
        if ($result_decoded->auth_status=="0300" && $retrieve_status=='success') {
            $success = $this->updateTransactionToDB($result_decoded,'Success');        
            // GenerateReceiptEmail($orderid, 1, $draftreceipt);
            return view('paymentSuccess');
        } elseif($result_decoded->auth_status=="0399") { // Error     
            $failure = $this->updateTransactionToDB($result_decoded,'Failure');     
            $status='Failure';
            return view('paymentFauiler',compact('status'));
        }
        elseif($result_decoded->auth_status=="0002"){ //pending
            $failure = $this->updateTransactionToDB($result_decoded,'Pending');     
            $status='Pending';
            return view('paymentFauiler',compact('status'));
        }

    }

    public function payment_response_only(Request $request){
        $tx = "";
        $secretkey=env('security_key');
        if(!empty($request->all())) { 
            $tx_array = $request->all();
            if (isset($tx_array['transaction_response'])) {
                $tx = $tx_array['transaction_response'];
            }
        } else {
            echo "<br><br>Invalid call<br>";
            die();
        }

        // Signature validation
        try { 
            $result_decoded = JWT::decode($tx, new Key($secretkey, 'HS256')); 
        } catch (\Exception $e) {
            echo "<br><br>Invalid response<br>";
            die();
        }
        // Process info
        $transactionid = $result_decoded->transactionid;  
        $retrieve_status=$this->retrieve_transaction($transactionid);
        if ($result_decoded->auth_status=="0300" && $retrieve_status=='success') {
            $success = $this->updateTransactionToDB($result_decoded,'Success');        
            // GenerateReceiptEmail($orderid, 1, $draftreceipt);
            return view('paymentSuccess');
        } elseif($result_decoded->auth_status=="0399") { // Error     
            $failure = $this->updateTransactionToDB($result_decoded,'Failure');     
            $status='Failure';
            return view('paymentFauiler',compact('status'));
        }
        elseif($result_decoded->auth_status=="0002"){ //pending
            $failure = $this->updateTransactionToDB($result_decoded,'Pending');     
            $status='Pending';
            return view('paymentFauiler',compact('status'));
        }
    }
    
    public function updateTransactionToDB($all_data,$status){
        $orderid = $all_data->orderid;
        $transaction_date = $all_data->transaction_date;
        $transactionid = $all_data->transactionid;    //payment transaction id
        $charge_amount = $all_data->charge_amount;
        $transaction=Transaction::where('order_id',$orderid)->update(["transaction_id"=>$transactionid,"transaction_date"=>$transaction_date,"charge_amount"=>$charge_amount]);
        $transaction_id=Transaction::where('order_id',$orderid)->select('id')->first()->toArray()['id'];
        $entry=Entry::where('transaction_id',$transaction_id)->update(['payment_status'=>$status]);
    }

    public function order_data($order_id){
        $data=Transaction::where('order_id',$order_id)->select('auth_token','auth_id')->limit(1)->first()->toArray();
        return view('apiView',compact('data'));
    }
    public function order_data_only($order_id){
        $data=Transaction::where('order_id',$order_id)->select('auth_token','auth_id')->limit(1)->first()->toArray();
        return view('apiViewOnly',compact('data'));
    }
    public function retrieve_transaction($transaction_id){
        $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
        $data = ['transactionid' => $transaction_id];
        $curl_payload = JWT::encode($data, env('security_key'), "HS256", null ,$headers);
        $track_id=uniqid();
        $time_stump=time();
        $ch = curl_init( "https://pguat.billdesk.io/payments/ve1_2/transactions/get" );
        $ch_headers = array(
            "Content-Type: application/jose",
            "accept: application/jose",
            "BD-Traceid: $track_id",
            "BD-Timestamp: $time_stump"
        );
        curl_setopt( $ch, CURLOPT_HTTPHEADER, $ch_headers);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt( $ch, CURLOPT_POSTFIELDS, $curl_payload);
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );                   
        $result = curl_exec($ch);
        curl_close($ch);
        $result_decoded = JWT::decode($result, new Key(env('security_key'), 'HS256'));
        $result_array = (array) $result_decoded;
        return $result_array['transaction_error_type'];
    }

    public function generate_invoice(){
        sleep(125);
        echo "hello i am in generate invoice";
    }
    public function create_transaction(){
        echo "hello i am in create transaction";
    }
}


