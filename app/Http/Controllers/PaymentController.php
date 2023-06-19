<?php

namespace App\Http\Controllers;
ini_set('max_execution_time', 180);
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Transaction;
use App\Entry;
use App\Error;
use App\Installment;
use DB;
use DateTime;
use Exception;
use Illuminate\Support\Facades\Mail;
class PaymentController extends Controller
{
    public function createOrderId(Request $request){
        $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
        $secretkey=env('security_key');
        $orderid=uniqid();
        $order_date=date_format(new \DateTime(), DATE_W3C);
        $order_timestamp=strtotime($order_date);
        $payload = [
            'mercid' => env('merchant_id'),
            'orderid' => $orderid,
            'amount' => "1.00",
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
                "mercid"=>env('merchant_id'),
                "currency"=>"356",
                "amount"=>"1.00",
                "customer_refid"=>"hvh313",
                "subscription_refid"=>"Sub266",
                "subscription_desc"=>"Term insurance by Orangetheory fitness",
                "start_date"=>$request->start,
                "end_date"=>$request->end,
                "frequency"=>"mnth",
                "amount_type"=>"max",
                "recurrence_rule"=>"after",
                "debit_day"=>"1"
            ],
        ];
        /*****************************************/
            // Encode payload
        /*****************************************/

        $curl_payload = JWT::encode($payload, $secretkey, "HS256", null ,$headers);
        
        /*****************************************/
            // Submit to Billdesk
        /*****************************************/
        $ch = curl_init( "https://api.billdesk.com/payments/ve1_2/orders/create" );
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
            echo "<pre>";
            print_r($result_decoded);
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
    public function createOrderIdOnly(){
        $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
        $secretkey=env('security_key');
        $orderid=uniqid();
        $order_date=date_format(new \DateTime(), DATE_W3C);
        $order_timestamp=strtotime($order_date);
        $payload = [
            "mercid"=>env('merchant_id'),
            "customer_refid"=>"cust".time(),
            "subscription_refid"=>"Sub".time(),
            "subscription_desc"=>"Term insurance by Orangetheory fitness",
            "currency"=>"356",
            "frequency"=>'mnth',
            "amount_type"=>"max",
            "amount"=>"1.00",
            "start_date"=>"2023-06-18",
            "end_date"=>"2023-12-18",
            "recurrence_rule"=>"after",
            "debit_day"=>"1",
            "ru"=>env("response_url_only"),            
            "device" => [
                'init_channel' => 'internet',
                'ip' => env('ip_address'),
                'user_agent' => 'Mozilla/5.0'
            ],
            "customer"=>[
                "first_name"=>"Dhiraj",
                "mobile"=>"8920602400",
                "email"=>"dimpybca@gmail.com",
            ],                
        ];

        $curl_payload = JWT::encode($payload, $secretkey, "HS256", null ,$headers);
        $ch = curl_init("https://api.billdesk.com/pgsi/ve1_2/mandatetokens/create");
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
            echo "<pre>";
            print_r($result_decoded);
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
            echo $e->getMessage();
            die();
        }
        // Process info
        $transactionid = $result_decoded->transactionid; 
        $charge_amount = $result_decoded->charge_amount;
        $email= $result_decoded->additional_info->additional_info1;  
        $retrieve_status=$this->retrieve_transaction($transactionid);
        if ($result_decoded->auth_status=="0300" && $retrieve_status=='success') {
            $success = $this->updateTransactionToDB($result_decoded,'Success');     
            try{  
                Mail::send( ['html' => 'payment-invoice'], ['amount'=>$charge_amount,'trans_id'=>$transactionid], function ($message) use ($email) {
                    $message->to($email)
                        ->subject("Orangetheory Fitness payment receipt.");
                });
            }
            catch (\Exception $e) {
            }
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
            if (isset($tx_array['mandate_response'])) {
                $tx = $tx_array['mandate_response'];
            }
        } else {
            echo "<br><br>Invalid call<br>";
            die();
        }
        // Signature validation
        try { 
            $result_decoded = JWT::decode($tx, new Key($secretkey, 'HS256')); 
        } catch (\Exception $e) {
            echo "<br><br>Invalid response hello<br>";
            echo $e->getMessage();
            die();
        }
        // Process info
        $email= $result_decoded->additional_info->additional_info1;   
        if ($result_decoded->verification_error_code=='TRS0000' && $result_decoded->status=='active') {
            $success = $this->updateTransactionToDB_only($result_decoded,'Success');   
            try{
                Mail::send( ['html' => 'payment-invoice'], ['amount'=>"0.00",'trans_id'=>"Mandate"], function ($message) use ($email) {
                    $message->to($email)
                        ->subject("Orangetheory Fitness Mandate subscription cofirmation");
                });
            }
            catch (\Exception $e) {
            }
            return view('paymentSuccess');
        } else { // Error     
            $failure = $this->updateTransactionToDB_only($result_decoded,'Failure');     
            $status='Failure';
            return view('paymentFauiler',compact('status'));
        }
    }
    
    public function updateTransactionToDB($all_data,$status){
        $orderid = $all_data->orderid;
        $transaction_date = $all_data->transaction_date;
        $transactionid = $all_data->transactionid;    //payment transaction id
        $charge_amount = $all_data->charge_amount;
        $payment_method = $all_data->payment_method_type;
        if(!empty($all_data->mandate)){
            $subscription_refid=$all_data->mandate->subscription_refid;
            $start_date=$all_data->mandate->start_date;
            $mandate_id=$all_data->mandate->mandateid;
            $next_invoice_day=date('Y-m-d', strtotime('-2 day', strtotime($start_date)));
            $transaction=Transaction::where('order_id',$orderid)->update(["transaction_id"=>"$transactionid","mandate_id"=>"$mandate_id","transaction_date"=>"$transaction_date","charge_amount"=>"$charge_amount","payment_method"=>"$payment_method",'subscription_refid'=>"$subscription_refid",'next_invoice_day'=>"$next_invoice_day",'status'=>"$status"]);
        }
        else{
            $transaction=Transaction::where('order_id',$orderid)->update(["transaction_id"=>"$transactionid","transaction_date"=>"$transaction_date","charge_amount"=>"$charge_amount","payment_method"=>"$payment_method",'status'=>"$status"]); 
        }
        $transaction_id=Transaction::where('order_id',$orderid)->select('id')->first()->toArray()['id'];
        $entry=Entry::where('transaction_id',"$transaction_id")->update(["payment_status"=>"$status"]);
    }

    public function updateTransactionToDB_only($all_data,$status){
        $orderid = $all_data->additional_info->additional_info2;
        $transaction_date = $all_data->createdon;
        $mandate_id = $all_data->mandateid;    //payment mandate id
        $subscription_refid=$all_data->subscription_refid;
        $payment_method = $all_data->payment_method_type;
        $start_date=$all_data->start_date;
        $next_invoice_day=date('Y-m-d', strtotime('-2 day', strtotime($start_date)));
        $transaction=Transaction::where('order_id',$orderid)->update(["mandate_id"=>"$mandate_id","transaction_date"=>"$transaction_date","payment_method"=>"$payment_method",'subscription_refid'=>"$subscription_refid",'next_invoice_day'=>"$next_invoice_day",'status'=>"$status"]);
        $transaction_id=Transaction::where('order_id',$orderid)->select('id')->first()->toArray()['id'];
        $entry=Entry::where('transaction_id',"$transaction_id")->update(["payment_status"=>"$status"]);
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
        $ch = curl_init( "https://api.billdesk.com/payments/ve1_2/transactions/get" );
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
        return $result_decoded->transaction_error_type;
    }

    public function generate_invoice(){
        $comp_date=date('Y-m-d');
        $all_invoice_data = Transaction::where('next_invoice_day', '=',"$comp_date")->where('recived_no_of_installment', '<', DB::raw('no_of_installment'))->where('payment_installment', '=', 'EMI')->where('status', '=', 'Success')->get(["id","payment_method","subscription_refid","customer_refid","next_invoice_day","installment_amount","mandate_id","recived_no_of_installment","frequency"])->toArray();
        //API operation
        $all_size=sizeof($all_invoice_data);
            for($i=0;$i<$all_size;$i++){
                try{
                    $track_id=uniqid();
                    $time_stump=time();
                    $rand_number=$i.$time_stump;
                    $result_decoded="";
                    $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
                    if($all_invoice_data[$i]['payment_method']=='upi'){
                        $payload = [
                            'mercid' => env('merchant_id'),
                            'subscription_refid' => $all_invoice_data[$i]['subscription_refid'],
                            'customer_refid' => $all_invoice_data[$i]['customer_refid'],
                            'invoice_number' => "INV".$rand_number,
                            "invoice_display_number" => "INV".$rand_number,
                            "invoice_date" => $all_invoice_data[$i]['next_invoice_day'],
                            "duedate" => date('Y-m-d', strtotime($all_invoice_data[$i]['next_invoice_day']. ' + 7 days')),
                            "debit_date" => date('Y-m-d', strtotime($all_invoice_data[$i]['next_invoice_day']. ' + 2 days')),
                            'amount' => $all_invoice_data[$i]['installment_amount'].".00",
                            "net_amount" => $all_invoice_data[$i]['installment_amount'].".00",
                            "currency" => "356",
                            "mandateid" => $all_invoice_data[$i]['mandate_id'],
                            "debit_request_no" => $all_invoice_data[$i]['recived_no_of_installment']+1,
                            "description" => "Invoice for ".date('F, Y', strtotime($all_invoice_data[$i]['next_invoice_day'])),
                        ];
                    }
                    else{
                        $payload = [
                            'mercid' => env('merchant_id'),
                            'subscription_refid' => $all_invoice_data[$i]['subscription_refid'],
                            'customer_refid' => $all_invoice_data[$i]['customer_refid'],
                            'invoice_number' => "INV".$rand_number,
                            "invoice_display_number" => "INV".$rand_number,
                            "invoice_date" => $all_invoice_data[$i]['next_invoice_day'],
                            "duedate" => date('Y-m-d', strtotime($all_invoice_data[$i]['next_invoice_day']. ' + 7 days')),
                            "debit_date" => date('Y-m-d', strtotime($all_invoice_data[$i]['next_invoice_day']. ' + 2 days')),
                            'amount' => $all_invoice_data[$i]['installment_amount'].".00",
                            "net_amount" => $all_invoice_data[$i]['installment_amount'].".00",
                            "currency" => "356",
                            "mandateid" => $all_invoice_data[$i]['mandate_id'],
                            "description" => "Invoice for ".date('F, Y', strtotime($all_invoice_data[$i]['next_invoice_day'])),
                        ];
                    }
                    $curl_payload = JWT::encode($payload, env('security_key'), "HS256", null ,$headers);
                    $ch = curl_init("https://api.billdesk.com/pgsi/ve1_2/invoices/create");
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
                    $installment=new Installment();
                    $installment->invoice_number=$result_decoded->invoice_number;
                    $installment->invoice_id=$result_decoded->invoice_id;
                    $installment->subscription_refid=$result_decoded->subscription_refid;
                    $installment->mandate_id=$result_decoded->mandateid;
                    $installment->debit_amount=$result_decoded->net_amount;
                    $installment->actual_debit_date=$result_decoded->debit_date;
                    $installment->due_date=$result_decoded->duedate;
                    $installment->recived_no_of_installment=$all_invoice_data[$i]['recived_no_of_installment'];
                    $installment->payment_method=$all_invoice_data[$i]['payment_method'];
                    $installment->payment_status=$result_decoded->status;
                    $installment->save();
                }
                catch(Exception $exception) {
                    $new_error=new Error();
                    $new_error->error_code=$exception->getCode();
                    $new_error->file_path=$exception->getFile();
                    $new_error->line_number=$exception->getLine();
                    $new_error->error_message=$exception->getMessage();
                    $new_error->status="Created";
                    $new_error->error_type="Invoice";
                    $new_error->save();
                }
                finally {
                    $recived_count=$all_invoice_data[$i]['recived_no_of_installment']+1;
                    $trans_id=$all_invoice_data[$i]['id'];
                    $next_invoice_date="";
                    if($all_invoice_data[$i]['frequency']=='mnth'){
                        $next_date=$all_invoice_data[$i]['next_invoice_day'];
                        $next_temp=date('Y-m-d', strtotime($next_date. ' +1 month'));
                        $find_date=explode('-',$next_date)[2];
                        $find_date_temp=explode('-',$next_temp)[2];
                        if($find_date==$find_date_temp){
                            $next_invoice_date=$next_temp;
                        }
                        else{
                            $day_temp=date('Y-m-d', strtotime($next_temp. " -$find_date_temp days"));
                            $next_invoice_date=$day_temp;
                        }
                    }
                    elseif($all_invoice_data[$i]['frequency']=='week'){
                        $next_invoice_date=date('Y-m-d', strtotime($all_invoice_data[$i]['next_invoice_day']. ' +1 week'));
                    }
                    elseif($all_invoice_data[$i]['frequency']=='bimn'){
                        $next_invoice_date=date('Y-m-d', strtotime($all_invoice_data[$i]['next_invoice_day']. ' +15 days'));
                    }
                    elseif($all_invoice_data[$i]['frequency']=='qurt'){
                        $next_date=$all_invoice_data[$i]['next_invoice_day'];
                        $next_temp=date('Y-m-d', strtotime($next_date. ' +3 month'));
                        $find_date=explode('-',$next_date)[2];
                        $find_date_temp=explode('-',$next_temp)[2];
                        if($find_date==$find_date_temp){
                            $next_invoice_date=$next_temp;
                        }
                        else{
                            $day_temp=date('Y-m-d', strtotime($next_temp. " -$find_date_temp days"));
                            $next_invoice_date=$day_temp;
                        }
                    }
                    elseif($all_invoice_data[$i]['frequency']=='bian'){
                        $next_date=$all_invoice_data[$i]['next_invoice_day'];
                        $next_temp=date('Y-m-d', strtotime($next_date. ' +6 month'));
                        $find_date=explode('-',$next_date)[2];
                        $find_date_temp=explode('-',$next_temp)[2];
                        if($find_date==$find_date_temp){
                            $next_invoice_date=$next_temp;
                        }
                        else{
                            $day_temp=date('Y-m-d', strtotime($next_temp. " -$find_date_temp days"));
                            $next_invoice_date=$day_temp;
                        }
                    }
                    elseif($all_invoice_data[$i]['frequency']=='year'){
                        $next_invoice_date=date('Y-m-d', strtotime($all_invoice_data[$i]['next_invoice_day']. ' +1 year'));
                    }
                    Transaction::where('id',$trans_id)->update(["recived_no_of_installment"=>$recived_count,"next_invoice_day"=>$next_invoice_date]); 
                }
            }
    }
    public function create_transaction(){
        $current_date=date('Y-m-d');
        $all_transaction=Installment::where('actual_debit_date', '=',$current_date)->where('payment_status', '=', 'unpaid')->get(['id','payment_method','debit_amount','mandate_id','invoice_id','subscription_refid','recived_no_of_installment'])->toArray();
        $all_transaction_size=sizeof($all_transaction);
        for($i=0;$i<$all_transaction_size;$i++){
            try{
                $track_id=uniqid();
                $time_stump=time();
                $rand_number=$i.$time_stump;
                $result_decoded="";
                $headers = ["alg" => "HS256", "clientid" => env('client_id'), "kid" => "HMAC"];
                if($all_transaction[$i]['payment_method']=='upi'){
                    $payload = [
                        'mercid' => env('merchant_id'),
                        'orderid' => $rand_number,
                        'amount' => $all_transaction[$i]['debit_amount'].".00",
                        "currency"=>"356",
                        "itemcode"=>"DIRECT",
                        "txn_process_type"=>"si",
                        "mandateid"=>$all_transaction[$i]['mandate_id'],
                        "invoice_id"=>$all_transaction[$i]['invoice_id'],
                        "subscription_refid"=>$all_transaction[$i]['subscription_refid'],
                        'debit_request_no'=>$all_transaction[$i]['recived_no_of_installment']+1,
                    ];
                }
                else{
                    $payload = [
                        'mercid' => env('merchant_id'),
                        'orderid' => $rand_number,
                        'amount' => $all_transaction[$i]['debit_amount'].".00",
                        "currency"=>"356",
                        "itemcode"=>"DIRECT",
                        "txn_process_type"=>"si",
                        "mandateid"=>$all_transaction[$i]['mandate_id'],
                        "invoice_id"=>$all_transaction[$i]['invoice_id'],
                        "subscription_refid"=>$all_transaction[$i]['subscription_refid'],
                    ];
                }
                $curl_payload = JWT::encode($payload, env('security_key'), "HS256", null ,$headers);
                $ch = curl_init("https://api.billdesk.com/payments/ve1_2/transactions/create");
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
                $trans_id=$all_transaction[$i]['id'];
                if($result_decoded->auth_status=='0300' && $result_decoded->transaction_error_type=='success'){
                Installment::where('id',$trans_id)->update(['order_id'=>$result_decoded->orderid,'transaction_id'=>$result_decoded->transactionid,'on_debit_date'=>$result_decoded->transaction_date,'payment_status'=>"Success"]);
                }
                else{
                    Installment::where('id',$trans_id)->update(['order_id'=>$result_decoded->orderid,'transaction_id'=>$result_decoded->transactionid,'on_debit_date'=>$result_decoded->transaction_date,'payment_status'=>"Failure"]);
                }
            }
            catch(Exception $exception) {
                $new_error=new Error();
                $new_error->error_code=$exception->getCode();
                $new_error->file_path=$exception->getFile();
                $new_error->line_number=$exception->getLine();
                $new_error->error_message=$exception->getMessage();
                $new_error->status="Created";
                $new_error->error_type="Installment";
                $new_error->save();
            }
        }
    }

    public function check_pending_transaction(){
        $comp_date=date('Y-m-d H:i:s', strtotime('-45 minute', strtotime(date("Y-m-d H:i:s"))));
        $data=Transaction::where('status','Pending')->where('created_at','>=',$comp_date)->get(['id','transaction_id','created_at','updated_at'])->toArray();
        $all_size=sizeof($data);
        for($i=0;$i<$all_size;$i++){
            try{
                $transaction_id=$data[$i]['transaction_id'];
                $payment_status=$this->retrieve_transaction($transaction_id);
                if($payment_status=='success'){
                    Transaction::where('transaction_id',$transaction_id)->update(['status'=>"Success"]);
                    Entry::where('transaction_id',$data[$i]['id'])->update(['payment_status'=>'Success']); 
                }
                else{
                    $db_time=date('Y-m-d H:i:s', strtotime($data[$i]['created_at']));
                    $to_time = strtotime($db_time);
                    $from_time = strtotime($comp_date);
                    $time_diff=round(abs($to_time - $from_time) / 60,2);
                    if($time_diff<=5){
                        Transaction::where('transaction_id',$transaction_id)->update(['status'=>"Failure"]);
                        Entry::where('transaction_id',$data[$i]['id'])->update(['payment_status'=>'Failure']); 
                    }
                }
            }
            catch(Exception $e){
            }
        }
    }
}


