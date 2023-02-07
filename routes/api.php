<?php
// auth()->guard('admin-api')->user()->id;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\user\UserController;
use App\Http\Controllers\superAdmin\SuperAdminController;
use App\Http\Controllers\PasswordResetRequestController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\superAdmin\EligibiltyRangeController as SuperAdminEligibiltyRangeController;
use App\Http\Controllers\superAdmin\BranchController as SuperAdminBranchController;
use App\Http\Controllers\superAdmin\IncomebindController as SuperAdminIncomebindController;
use App\Http\Controllers\admin\EligibiltyRangeController as AdminEligibiltyRangeController;
use App\Http\Controllers\admin\IncomebindController as AdminIncomebindController;
use App\Http\Controllers\admin\BranchController as AdminBranchController;
use App\Http\Controllers\user\EligibiltyRangeController as UserEligibiltyRangeController;
use App\Http\Controllers\user\IncomebindController as UserIncomebindController;
use App\Http\Controllers\user\BranchController as UserBranchController;
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
    Route::get('/all-branch/{id?}/{all_data?}', [AdminBranchController::class,'index']);
    //matrix opertaion
    Route::post('/create-matrix/{branch_id}', [AdminIncomebindController::class,'store']);
    Route::put('/edit-matrix/{branch_id}/{minmum_range}/{maximum_range}', [AdminIncomebindController::class,'update']);
    Route::delete('/delete-matrix/{matrix_id}', [AdminIncomebindController::class,'delete']);
    Route::get('/all-matrix/{branch_id}', [AdminIncomebindController::class,'index']);
    Route::get('/single-matrix/{branch_id}/{minmum_range}/{maximum_range}', [AdminIncomebindController::class,'single_matrix']);
});

// =================user section==========================
//user login and register
Route::post('/register', [UserController::class,'register']);
Route::group(['middleware' => 'auth:user-api','prefix' => 'user'], function () {
    Route::post('logout', [UserController::class,'logout']);
    Route::post('verify', [UserController::class,'me']);
    Route::put('upadte-detail', [UserController::class,'personal_update']);
    Route::put('update-password', [UserController::class,'update_password']);
    Route::post('/check-eligibilty', [UserEligibiltyRangeController::class,'check_eligibilty']);
    Route::post('/add-eligibilty-comment/{id}', [UserEligibiltyRangeController::class,'add_comment']);
    Route::post('/eligibilty-report', [UserEligibiltyRangeController::class,'index']);
    Route::get('/user-sumission-detail/{id}', [UserEligibiltyRangeController::class,'user_sumission_detail']);
    //user related work by admin
    Route::post('/create-user', [UserController::class,'register']);
    Route::put('/edit-user/{id}', [UserController::class,'update']);
    Route::get('/all-user/{id?}/{assoc_id?}', [UserController::class,'index']);
    //branch related work by admin
    Route::get('/all-branch/{id?}/{all_data?}', [UserBranchController::class,'index']);
    //matrix opertaion
    Route::get('/all-matrix/{branch_id}', [UserIncomebindController::class,'index']);
});

// =================superAdmin section==========================
//superAdmin login and register
Route::post('superadmin/register', [SuperAdminController::class,'register']);
Route::group(['middleware' => 'auth:superAdmin-api','prefix' => 'superadmin'], function () {
    Route::post('logout', [SuperAdminController::class,'logout']);
    Route::post('verify', [SuperAdminController::class,'me']);
    Route::put('upadte-detail', [SuperAdminController::class,'update']);
    Route::put('update-password', [SuperAdminController::class,'update_password']);
    Route::post('/check-eligibilty', [SuperAdminEligibiltyRangeController::class,'check_eligibilty']);
    Route::post('/add-eligibilty-comment/{id}', [SuperAdminEligibiltyRangeController::class,'add_comment']);
    Route::post('/eligibilty-report', [SuperAdminEligibiltyRangeController::class,'index']);
    Route::get('/user-sumission-detail/{id}', [SuperAdminEligibiltyRangeController::class,'user_sumission_detail']);
    //admin related work by superadmin
    Route::post('/create-admin', [AdminController::class,'register']);
    Route::post('/indivedual-admin/{assoc_id}', [AdminController::class,'store']);
    Route::delete('/delete-admin/{id}', [AdminController::class,'delete']);
    Route::put('/update-association/{id}', [AdminController::class,'update_association']);
    Route::get('/all-admin/{id?}/{all_data?}', [AdminController::class,'index']);
    Route::get('/association-with-admin/{id?}', [AdminController::class,'association_with_admin']);
    //user related work by superadmin
    Route::post('/create-user/{assoc_id?}', [UserController::class,'register']);
    Route::put('/edit-user/{id}', [UserController::class,'update']);
    Route::get('/all-user/{id?}/{assoc_id?}', [UserController::class,'index']);
    Route::delete('/user/{id?}', [UserController::class,'delete']);
    //branch related work by superadmin
    Route::post('/create-branch', [SuperAdminBranchController::class,'store']);
    Route::put('/edit-branch/{id}', [SuperAdminBranchController::class,'update']);
    Route::get('/all-branch/{id?}/{assos_id?}', [SuperAdminBranchController::class,'index']);
    //matrix opertaion
    Route::post('/create-matrix/{assos_id}/{branch_id}', [SuperAdminIncomebindController::class,'store']);
    Route::put('/edit-matrix/{association_id}/{branch_id}/{minmum_range}/{maximum_range}', [SuperAdminIncomebindController::class,'update']);
    Route::delete('/delete-matrix/{matrix_id}', [SuperAdminIncomebindController::class,'delete']);
    Route::get('/all-matrix/{assos_id}/{branch_id}', [SuperAdminIncomebindController::class,'index']);
    Route::get('/single-matrix/{association_id}/{branch_id}/{minmum_range}/{maximum_range}', [SuperAdminIncomebindController::class,'single_matrix']);
});

Route::post('/Forgotpassword',[PasswordResetRequestController::class,'sendEmail']);
Route::post('/check-forgot-token',[PasswordResetRequestController::class,'check_token']);
Route::post('ForgotpasswordActual',[PasswordResetRequestController::class,'forgot_password_actual']);

//common login
Route::post('/login', [LoginController::class,'login']);



