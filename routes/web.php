<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\EligibiltyRangeController;
use App\Http\Controllers\PaymentController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('create-order',[PaymentController::class,'createOrderId']);
Route::post('paymentresponse',[PaymentController::class,'payment_response']);
Route::post('paymentresponseonly',[PaymentController::class,'payment_response_only']);
Route::get('api-view/{order_id}',[PaymentController::class,'order_data']);
Route::get('api-view-only/{order_id}',[PaymentController::class,'order_data_only']);
Route::get('api-data',[PaymentController::class,'create_transaction']);
Route::get('{any}', function () {
    return view('welcome');
})->where('any', '(?!api-view)(?!create-order)(?!api-data)(?!api-view-only)(?!paymentresponse)(?!paymentresponseonly).*$');
