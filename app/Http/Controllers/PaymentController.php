<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Jose\Component\Signature\JWS;
// use Jose\Component\Signature\Algorithm\HS256;
// use Jose\Component\Signature\JWSBuilder;
// use Jose\Component\Signature\Serializer\CompactSerializer;
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

    public function createOrderId(Request $request){
        $str = "merchant_id|order_id|NA|100.00|NA|NA|NA|INR|NA|R|securityId|NA|NA|F|john@doe1.com|mobile_no|NA|NA|NA|NA|NA|NA";
        $checksum = hash_hmac('sha256', $str, 'checksum_key', false);
        $checksum = strtoupper($checksum);
        return $checksum;
    }



















    function encryptAndSignJWSWithHMAC($reqStr, $secretKey, $clientid) {
        $signer = new HS256();
        $customParams = array("clientid" => $clientid);
        $jwsHeader = [
            "alg" => "HS256",
            "crit" => null,
            "jku" => null,
            "jwk" => null,
            "kid" => null,
            "x5u" => null,
            "x5c" => null,
            "x5t" => null,
            "x5t#S256" => null,
            "typ" => null,
            "cty" => null,
            "custom" => $customParams,
            "zip" => null
        ];
        $jwsBuilder = new JWSBuilder($signer);
        $jwsObject = $jwsBuilder
            ->create()
            ->withPayload($reqStr)
            ->addSignature($secretKey, $jwsHeader)
            ->build();
        $serializer = new CompactSerializer();
        return $serializer->serialize($jwsObject);
    }
}


