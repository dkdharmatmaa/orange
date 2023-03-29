<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Firebase\JWT\JWT;
class PaymentController extends Controller
{
    //Config::get('country_codes_value');
    public function createOrderId(){
        $headers = ["alg" => "HS256", "clientid" => "bduatv2ktk", "kid" => "HMAC"];

    $payload = [
        'mercid' => "BDUATV2KTK",
        'orderid' => uniqid(),
        'amount' => "1.0",
        'order_date' => date_format(new \DateTime(), DATE_W3C),
        'currency' => "356",
        'ru' => "http://3.111.85.79/paymentresponse",
        'itemcode' => "DIRECT",
      "device" => [
        'init_channel' => 'internet',
        'ip' => "192.168.1.1",
        'user_agent' => 'Mozilla/5.0'
      ]
    ];
    
    

    /*****************************************/
        // Encode payload
    /*****************************************/

    $curl_payload = JWT::encode($payload, "16uUloqqrs2iMUZnrojXtmkTeSQqjYIX", "HS256", null ,$headers);
    
    /*****************************************/
        // Submit to Billdesk
    /*****************************************/
    $ch = curl_init( "https://pguat.billdesk.io/payments/ve1_2/orders/create" );
    $transaction_id=uniqid();
    $servertimeYYYYMMddHHmmss=date_format(new \DateTime(), DATE_W3C);
    $ch_headers = array(
        "Content-Type: application/jose",
        "accept: application/jose",
        "BD-Traceid: $transaction_id",
        "BD-Timestamp: $servertimeYYYYMMddHHmmss"
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
    
    $launch_billdesk = false;
    try { 
        $result_decoded = JWT::decode($result, "16uUloqqrs2iMUZnrojXtmkTeSQqjYIX", array('HS256'));
        $result_array = (array) $result_decoded;
            
        if ($result_decoded->status == 'ACTIVE') {
            $transactionid = $result_array['links'][1]->parameters->bdorderid;
            $authtoken = $result_array['links'][1]->headers->authorization;

            $launch_billdesk = true;   //write js code to launch sdk

        } else { // Response error
            echo "Response error";
        }
                        
    } catch (\Exception $e) {
        echo "<br><br>Return signature validation FAILED: $e";
    }
    }

    public function payment_response(Request $request){
        $tx = "";
if(!empty($request->all())) { 
    $tx_array = $request->all();
    if (isset($tx_array['transaction_response'])) {
        $tx = $tx_array['transaction_response'];
    }
} else {
    echo "<br><br>Invalid call<br>";
    die();
}


/*****************************************/
    // Signature validation
/*****************************************/ 
try { 
    $result_decoded = JWT::decode($tx, "16uUloqqrs2iMUZnrojXtmkTeSQqjYIX", array('HS256'));
    $result_array = (array) $result_decoded;
    $result_json =  json_encode($result_array,JSON_PRETTY_PRINT);       
} catch (\Exception $e) {
    //echo $e; 
    echo "<br><br>Invalid response<br>";
    die();
}

/*****************************************/
    // Process info
/*****************************************/ 
if ($result_decoded->transaction_error_type == 'success') {
    
    $orderid = $result_decoded->orderid;
    $transaction_date = $result_decoded->transaction_date;
    $transactionid = $result_decoded->transactionid;    //payment transaction id
    $charge_amount = $result_decoded->charge_amount;

    /*  SAVE TO DB and send receipt     */
    $success = updateTransactionToDB($result_array);        
    GenerateReceiptEmail($orderid, 1, $draftreceipt);
    
    echo "<h2>Transaction was successful....</h2>";
    echo "Transaction Date: $transaction_date<br>";
    echo "Transaction ID: $transactionid<br>";
    echo "Charge Amount: ₹$charge_amount<br>";          


} else { // Error
    $txerror = $result_decoded->transaction_error_type;
    $txid = $result_decoded->transactionid;
    echo "<h2>Transaction FAILED....</h2>";
    echo "Transaction Date: $transaction_date<br>";
    echo "Transaction ID: $transactionid<br>";
    echo "Charge Amount: ₹$charge_amount<br>";          
    echo "Failure Reason: ₹$transaction_error_desc<br>";            
}
    }

}


