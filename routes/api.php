<?php
// auth()->guard('admin-api')->user()->id;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\user\UserController;
use App\Http\Controllers\PasswordResetRequestController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\admin\EntryController as AdminEntryController;
use App\Http\Controllers\user\EntryController as UserEntryController;
use App\Http\Controllers\admin\BranchController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ErrorLogController;
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
Route::group(['middleware' => 'auth:admin-api','prefix' => 'admin'], function () {
    Route::post('logout', [AdminController::class,'logout']);
    Route::post('verify', [AdminController::class,'me']);
    Route::get('admin-report', [AdminController::class,'detail_report']);
    //user related work by admin
    Route::post('/create-user', [UserController::class,'register']);
    Route::put('/edit-user/{id}', [UserController::class,'update']);
    Route::get('/all-user/{id?}', [UserController::class,'index']);
    Route::delete('/user/{id?}', [UserController::class,'delete']);
    //branch related work by admin
    Route::post('/create-branch', [BranchController::class,'store']);
    Route::put('/edit-branch/{id}', [BranchController::class,'update']);
    Route::delete('/all-branch/{id}', [BranchController::class,'delete']);
    Route::get('/all-branch/{id?}', [BranchController::class,'index']);
    Route::get('/all-branch-option', [BranchController::class,'option_index']);
    //product related work by admin
    Route::get('/all-product/{id?}', [ProductController::class,'index']);
    Route::get('/product-option', [ProductController::class,'index_option']);
    Route::post('/create-product', [ProductController::class,'store']);
    Route::put('/edit-product/{id}', [ProductController::class,'update']);
    Route::delete('/product/{id}', [ProductController::class,'delete']);
    //form related work by admin
    Route::post('/offline-entry', [AdminEntryController::class,'store_offline']);
    Route::post('/online-entry-mandate', [AdminEntryController::class,'store_online_mandate']);
    Route::post('/online-entry-payment', [AdminEntryController::class,'store_online_payment']);
    Route::post('/report', [AdminEntryController::class,'index']);
    Route::get('/report-single/{id}', [AdminEntryController::class,'index_single']);
    Route::get('/installment/{id}', [AdminEntryController::class,'get_installment']);
    Route::post('/all-installment', [AdminEntryController::class,'all_installment']);

    //error related work
    Route::post('/error', [ErrorLogController::class,'index']);
});

// =================user section==========================
//user login and register
Route::post('/register', [UserController::class,'register']);
Route::group(['middleware' => 'auth:user-api','prefix' => 'user'], function () {
    Route::post('logout', [UserController::class,'logout']);
    Route::post('verify', [UserController::class,'me']);
    //form related work by user
    Route::post('/offline-entry', [UserEntryController::class,'store_offline']);
    Route::post('/online-entry-mandate', [UserEntryController::class,'store_online_mandate']);
    Route::post('/online-entry-payment', [UserEntryController::class,'store_online_payment']);
    Route::post('/report', [UserEntryController::class,'index']);
    Route::get('/report-single/{id}', [UserEntryController::class,'index_single']);
    Route::get('/installment/{id}', [UserEntryController::class,'get_installment']);
    Route::post('/all-installment', [UserEntryController::class,'all_installment']);
    //product related work by user
    Route::get('/product-option', [ProductController::class,'index_option']);
    //branch related work by admin
    Route::get('/all-branch-option', [BranchController::class,'option_index']);
    
    //error related work
    Route::post('/error', [ErrorLogController::class,'index']);
});

Route::post('/Forgotpassword',[PasswordResetRequestController::class,'sendEmail']);
Route::post('/check-forgot-token',[PasswordResetRequestController::class,'check_token']);
Route::post('ForgotpasswordActual',[PasswordResetRequestController::class,'forgot_password_actual']);

//common login
Route::post('/login', [LoginController::class,'login']);


