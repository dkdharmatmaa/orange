<?php

namespace App\Http\Controllers\admin;

use App\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Branch;
use App\User;
class AdminController extends Controller
{
    public function index($id=0,$all_data=null){
        if($id)
          $data=Admin::where([['is_active',1],['id',$id]])->take(1)->get()->toArray();
        elseif($all_data=='all')
        $data=Admin::where([['is_active',1]])->get()->toArray();
        else
        $data=Admin::where([['is_active',1]])->select('id','name')->get()->toArray();
        
        return json_encode($data);
    }
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:admins'],
            'number' => ['required'],
            'address1' => ['required','string','max:100'],
            'address2' => ['string','max:100'],
            'city' => ['required','string','max:100'],
            'state' => ['required','string','max:100'],
            'zip_code' => ['required','integer'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $admin=new Admin();
        $admin->name=$request->name;
        $admin->email=$request->email;
        $admin->number=$request->number;
        $admin->address1=$request->address1;
        $admin->address2=$request->address2;
        $admin->city=$request->city;
        $admin->state=$request->state;
        $admin->zip_code=$request->zip_code;
        $admin->password=Hash::make($request->password);
        $admin->save();
        if($admin){
            return response()->json(['user'=>$admin,'status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'number' => ['required'],
            'address1' => ['required','string','max:100'],
            'address2' => ['string','max:100'],
            'city' => ['required','string','max:100'],
            'state' => ['required','string','max:100'],
            'zip_code' => ['required','integer'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $admin=Admin::find($id);
        $admin->name=$request->name;
        $admin->number=$request->number;
        $admin->address1=$request->address1;
        $admin->address2=$request->address2;
        $admin->city=$request->city;
        $admin->state=$request->state;
        $admin->zip_code=$request->zip_code;
        $admin->save();
        Branch::where('association_id',$id)->update(['association_name'=>$request->name]);
        if($admin){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function update_password(Request $request){
        $validator = Validator::make($request->all(), [
            'password' => ['required', 'confirmed','min:6'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $id=auth()->guard('admin-api')->user()->id;
        Admin::where('id', $id)->update(['password'=>Hash::make($request->password)]);
        return json_encode(['status'=>true,'message'=>"Password updated successful"]);
    }
    public function detail_report(){
        $id=auth()->guard('admin-api')->user()->id;
        $branch_count=Branch::where('association_id',$id)->count();
        $user_count=User::where('association_id',$id)->count();
        $main_data['branch_count']=$branch_count;
        $main_data['user_count']=$user_count;
        return json_encode($main_data);
    }
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->guard('admin-api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }
    public function me()
    {
        return response()->json(auth()->guard('admin-api')->user());
    }
    public function logout()
    {
        auth()->guard('admin-api')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' =>  'bearer',
            // 'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
    }
}
