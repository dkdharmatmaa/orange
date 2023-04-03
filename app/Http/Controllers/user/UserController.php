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
    public function index($id=0){
        if($id)
        $data=User::where([['id',$id]])->limit(1)->get()->toArray();
        else
        $data=User::all()->toArray();
        return json_encode($data);
    }
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'phone' => ['required','regex:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:admins'],
            'password' => ['required', 'string', 'min:4'],
            'branch_id' => ['required', 'integer', 'max:100'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $user=new User();
        $user->name=$request->name;
        $user->phone=$request->phone;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->branch_id=$request->branch_id;
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
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $user=User::find($id);
        $user->name=$request->name;
        $user->phone=$request->phone;
        $user->branch_id=$request->branch_id;
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
