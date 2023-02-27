<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\User;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller
{
    public function index($id=0,$assoc_id=0){
        if($id)
          $data=User::where([['id',$id]])->take(1)->get()->toArray();
        else
        $data=User::with('GetAssosName')->where('association_id',$assoc_id)->get()->toArray();
        
        return json_encode($data);
    }
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:admins'],
            'password' => ['required', 'string', 'min:4'],
            'association_id' => ['required', 'max:100'],
            'branch_id' => ['required', 'string', 'max:100'],
            'is_admin' => ['required','boolean'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $user=new User();
        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->association_id=$request->association_id;
        $branch_data=explode('/////',$request->branch_id);
        $user->branch_id=$branch_data[0];
        $user->branch_name=$branch_data[1];
        $user->is_admin=$request->is_admin;
        $user->save();

        $role=new Role();
        $role->email=$request->email;
        $role->role='user';
        $role->save();

        if($user){
            return response()->json(['user'=>$user,'status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'is_admin' => ['required','boolean'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $user=User::find($id);
        $user->name=$request->name;
        $user->is_admin=$request->is_admin;
        $branch_data=explode('/////',$request->branch_id);
        $user->branch_id=$branch_data[0];
        $user->branch_name=$branch_data[1];
        $user->save();
        if($user){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function personal_update(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $id=auth()->guard('user-api')->user()->id;
        $user=User::find($id);
        $user->name=$request->name;
        $user->save();
        if($user){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function update_password(Request $request){
        $validator = Validator::make($request->all(), [
            'password' => ['required', 'confirmed','min:4'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $id=auth()->guard('user-api')->user()->id;
        User::where('id', $id)->update(['password'=>Hash::make($request->password)]);
        return json_encode(['status'=>true,'message'=>"Password updated successful"]);
    }
    public function me()
    {
        return response()->json(auth()->guard('user-api')->user());
    }

    public function logout()
    {
        auth()->guard('user-api')->logout();
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
    public function delete($id){
        $user = User::find($id);
        Role::where(['email'=>$user['email'],'role'=>'user'])->delete();
        $user->delete();
        return "User deleted";
    }
}
