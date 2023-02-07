<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\EligibiltyRangeController;
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
Route::get('generate-pdf/{id}', [EligibiltyRangeController::class, 'print_eligibilty']);
Route::get('{any}', function () {
    return view('welcome');
})->where('any', '(?!generate-pdf).*$');
