<?php
// auth()->guard('admin-api')->user()->id;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\user\UserController;
use App\Http\Controllers\PasswordResetRequestController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\admin\EligibiltyRangeController as AdminEligibiltyRangeController;
use App\Http\Controllers\admin\IncomebindController as AdminIncomebindController;
use App\Http\Controllers\admin\BranchController as AdminBranchController;
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
    Route::put('upadte-detail', [AdminController::class,'update']);
    Route::put('update-password', [AdminController::class,'update_password']);
    Route::get('admin-report', [AdminController::class,'detail_report']);
    Route::post('/check-eligibilty', [AdminEligibiltyRangeController::class,'check_eligibilty']);
    Route::post('/add-eligibilty-comment/{id}', [AdminEligibiltyRangeController::class,'add_comment']);
    Route::post('/eligibilty-report', [AdminEligibiltyRangeController::class,'index']);
    Route::get('/user-sumission-detail/{id}', [AdminEligibiltyRangeController::class,'user_sumission_detail']);
    //user related work by admin
    Route::post('/create-user/{assoc_id?}', [UserController::class,'register']);
    Route::put('/edit-user/{id}', [UserController::class,'update']);
    Route::put('/update-association/{id}', [AdminController::class,'update_association']);
    Route::get('/all-user/{id?}/{assoc_id?}', [UserController::class,'index']);
    Route::delete('/user/{id?}', [UserController::class,'delete']);
    //branch related work by admin
    Route::post('/create-branch', [AdminBranchController::class,'store']);
    Route::put('/edit-branch/{id}', [AdminBranchController::class,'update']);
    Route::delete('/all-branch/{id}', [AdminBranchController::class,'delete']);
    Route::get('/all-branch/{id?}/{all_data?}', [AdminBranchController::class,'index']);
    //matrix opertaion
    Route::post('/create-matrix/{branch_id}', [AdminIncomebindController::class,'store']);
    Route::put('/edit-matrix/{branch_id}/{minmum_range}/{maximum_range}', [AdminIncomebindController::class,'update']);
    Route::delete('/delete-matrix/{minmum_range}/{branch_id}', [AdminIncomebindController::class,'delete']);
    Route::get('/all-matrix/{branch_id}', [AdminIncomebindController::class,'index']);
    Route::get('/single-matrix/{branch_id}/{minmum_range}/{maximum_range}', [AdminIncomebindController::class,'single_matrix']);
});

// =================user section==========================
//user login and register
Route::post('/register', [UserController::class,'register']);
Route::group(['middleware' => 'auth:user-api','prefix' => 'user'], function () {
    Route::post('logout', [UserController::class,'logout']);
    Route::post('verify', [UserController::class,'me']);
});

Route::post('/Forgotpassword',[PasswordResetRequestController::class,'sendEmail']);
Route::post('/check-forgot-token',[PasswordResetRequestController::class,'check_token']);
Route::post('ForgotpasswordActual',[PasswordResetRequestController::class,'forgot_password_actual']);

//common login
Route::post('/login', [LoginController::class,'login']);



