<?php

namespace App\Http\Controllers\superAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\SuperAdmin;
use Illuminate\Support\Facades\Hash;
class SuperAdminController extends Controller
{
    public function register(Request $request){
        $superadmin=new SuperAdmin();
        $superadmin->name=$request->name;
        $superadmin->email=$request->email;
        $superadmin->password=Hash::make($request->password);
        $superadmin->save();
        if($superadmin){
            return response()->json(['user'=>$superadmin,'status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->guard('superAdmin-api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }

    public function me()
    {
        return response()->json(auth()->guard('superAdmin-api')->user());
    }

    public function logout()
    {
        auth()->guard('superAdmin-api')->logout();
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
