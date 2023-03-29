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
Route::get('paymentresponse',[PaymentController::class,'payment_response']);
Route::get('api-view',function(){
    return view('apView');
});
Route::get('{any}', function () {
    return view('welcome');
})->where('any', '(?!api-view)(?!create-order)(?!returndata)(?!paymentresponse).*$');
