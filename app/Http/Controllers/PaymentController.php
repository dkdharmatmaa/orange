<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Jose\Component\Core\AlgorithmManager;
use Jose\Component\Core\JWK;
use Jose\Component\Signature\JWSBuilder;
use Jose\Component\Signature\Serializer\JSONFlattenedSerializer;
use Jose\Component\Signature\Algorithm\HS256;
use Illuminate\Support\Facades\Http;
class PaymentController extends Controller
{
    //
    public function makePaymentRequest(){
        $response = Http::withHeaders([
            'Accept' => 'application/json, application/json',
            'Content-Type' => 'application/json',
            'x-api-key' => env('api_key'),
            ])->post("https://api.thedataai.com/v2/match/individual$data_params", []);
        $main_data=json_decode($response,true);
    }

    public function createOrderId(){
        $response=Http::post("https://pguat.billdesk.io/payments/ve1_2/orders/create");
        echo "<pre>";
        print_r($response);
        echo "</pre>";
    }
    function encryptAndSignJWSWithHMAC($reqStr, $secretKey, $clientid) {

        // Create a JWK from the secret key
        $jwk = JWK::create([
            'kty' => 'oct',
            'k' => base64_encode($secretKey),
        ]);
    
        // Set the algorithm for the JWS header
        $algorithmManager = new AlgorithmManager([new HS256()]);
        $jwsBuilder = new JWSBuilder($algorithmManager);
        $jwsHeader = [
            'alg' => 'HS256',
            'clientid' => $clientid,
        ];
    
        // Create the JWS object and sign it with the secret key
        $jwsObject = $jwsBuilder->create()
            ->withPayload($reqStr)
            ->addSignature($jwk, $jwsHeader)
            ->build();
    
        // Serialize the JWS object to a JSON string
        $serializer = new JSONFlattenedSerializer();
        return $serializer->serialize($jwsObject);
    }
}


