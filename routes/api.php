<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\user\UserController;
use App\Http\Controllers\superAdmin\SuperAdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// =================admin section==========================
//admin login and register
Route::post('/admin/register', [AdminController::class,'register']);
Route::post('admin/login', [AdminController::class,'login']);
Route::group(['middleware' => 'auth:admin-api','prefix' => 'admin'], function () {
    Route::post('logout', [AdminController::class,'logout']);
    Route::post('verify', [AdminController::class,'me']);
});

// =================user section==========================
//user login and register
Route::post('/register', [UserController::class,'register']);
Route::post('/login', [UserController::class,'login']);
Route::group(['middleware' => 'auth:user-api','prefix' => 'user'], function () {
    Route::post('logout', [UserController::class,'logout']);
    Route::post('verify', [UserController::class,'me']);
});

// =================superAdmin section==========================
//superAdmin login and register
Route::post('superadmin/register', [SuperAdminController::class,'register']);
Route::post('superadmin/login', [SuperAdminController::class,'login']);
Route::group(['middleware' => 'auth:superAdmin-api','prefix' => 'superadmin'], function () {
    Route::post('logout', [SuperAdminController::class,'logout']);
    Route::post('verify', [SuperAdminController::class,'me']);
    //admin related work by superadmin
    Route::post('/create-admin', [AdminController::class,'register']);
    Route::get('/all-admin/{id?}', [AdminController::class,'index']);
});


