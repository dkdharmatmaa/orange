<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Transaction;
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
            $result_array = (array) $result_decoded;
            $result_json =  json_encode($result_array,JSON_PRETTY_PRINT);      
        } catch (\Exception $e) {
            echo "<br><br>Invalid response<br>";
            die();
        }

        // Process info
        if ($result_decoded->transaction_error_type == 'success') {
            $orderid = $result_decoded->orderid;
            $transaction_date = $result_decoded->transaction_date;
            $transactionid = $result_decoded->transactionid;    //payment transaction id
            $charge_amount = $result_decoded->charge_amount;
            
            /*  SAVE TO DB and send receipt     */
            $success = $this->updateTransactionToDB($result_array);        
            // GenerateReceiptEmail($orderid, 1, $draftreceipt);
            return view('paymentSuccess');

        } else { // Error
            $txerror = $result_decoded->transaction_error_type;
            $transaction_date = $result_decoded->transaction_date;
            $txid = $result_decoded->transactionid;
            $charge_amount = $result_decoded->charge_amount;
            echo "<h2>Transaction FAILED....</h2>";
            echo "Transaction Date: $transaction_date<br>";
            echo "Transaction ID: $txid<br>";
            echo "Charge Amount: ₹$charge_amount<br>";          
            echo "Failure Reason: ₹$txerror<br>";            
        }
    }

    public function updateTransactionToDB($all_data){
        $orderid = $all_data['orderid'];
        $transaction_date = $all_data['transaction_date'];
        $transactionid = $all_data['transactionid'];    //payment transaction id
        $charge_amount = $all_data['charge_amount'];
        $transaction=Transaction::find($orderid);
        $transaction->transaction_id=$transactionid;
        $transaction->transaction_date=$transaction_date;
        $transaction->charge_amount=$charge_amount;
        $transaction->save();
    }

    public function order_data($order_id){
        $data=Transaction::where('order_id',$order_id)->select('auth_id','transaction_id')->limit(1)->first()->toArray();
        return view('apiView',compact('data'));
    }
}


