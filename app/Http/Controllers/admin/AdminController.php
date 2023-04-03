<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Branch;
use App\User;
use App\Association;
use App\Admin;
use App\Role;
class AdminController extends Controller
{
    public function index($id=0,$all_data=null){
        if($id)
          $data=Association::where([['id',$id]])->take(1)->get()->toArray();
        elseif($all_data=='all')
        $data=Association::get()->toArray();
        else
        $data=Association::select('id','name')->get()->toArray();
        
        return json_encode($data);
    }
    public function association_with_admin($id){
        $data=Association::where('id',$id)->with('admins')->get();
        return $data;
    }
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:admins'],
            'number' => ['required'],
            'address1' => ['required','string','max:100'],
            'address2' => ['max:100'],
            'city' => ['required','string','max:100'],
            'state' => ['required','string','max:100'],
            'zip_code' => ['required','integer'],
            'password' => ['required', 'string', 'min:4'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $association=new Association();
        $association->name=$request->name;
        $association->number=$request->number;
        $association->address1=$request->address1;
        $association->address2=$request->address2;
        $association->city=$request->city;
        $association->state=$request->state;
        $association->zip_code=$request->zip_code;
        $association->save();

        $admin=new Admin();
        $admin->name=$request->admin_name;
        $admin->email=$request->email;
        $admin->association_id=$association['id'];
        $admin->password=Hash::make($request->password);
        $admin->save();
        
        $role=new Role();
        $role->email=$request->email;
        $role->role='admin';
        $role->save();

        if($admin){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function store(Request $request,$assoc_id){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:admins'],
            'password' => ['required', 'string', 'min:4'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $admin=new Admin();
        $admin->name=$request->name;
        $admin->email=$request->email;
        $admin->association_id=$assoc_id;
        $admin->password=Hash::make($request->password);
        $admin->save();

        $role=new Role();
        $role->email=$request->email;
        $role->role='admin';
        $role->save();
        
        if($admin){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $assoc_id=auth()->guard('admin-api')->user()->association_id;
        $id=auth()->guard('admin-api')->user()->id;
        $admin=Admin::find($id);
        $admin->name=$request->name;
        $admin->save();
        Branch::where('association_id',$assoc_id)->update(['association_name'=>$request->name]);
        if($admin){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function update_association(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'number' => ['required'],
            'address1' => ['required','string','max:100'],
            'address2' => ['max:100'],
            'city' => ['required','string','max:100'],
            'state' => ['required','string','max:100'],
            'zip_code' => ['required','integer'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $association=Association::find($id);
        $association->name=$request->name;
        $association->number=$request->number;
        $association->address1=$request->address1;
        $association->address2=$request->address2;
        $association->city=$request->city;
        $association->state=$request->state;
        $association->pre_text=$request->pre_text;
        $association->zip_code=$request->zip_code;
        $association->save();
        Branch::where('association_id',$id)->update(['association_name'=>$request->name]);
        if($association){
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
        $id=auth()->guard('admin-api')->user()->id;
        Admin::where('id', $id)->update(['password'=>Hash::make($request->password)]);
        return json_encode(['status'=>true,'message'=>"Password updated successful"]);
    }
    public function detail_report(){
        $id=auth()->guard('admin-api')->user()->association_id;
        $branch_count=Branch::where('association_id',$id)->count();
        $user_count=User::where('association_id',$id)->count();
        $association=Association::where('id',$id)->first();
        $main_data['branch_count']=$branch_count;
        $main_data['user_count']=$user_count;
        $main_data['association']=$association;
        return json_encode($main_data);
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
    public function delete($id){
        $data=Admin::find($id);
        Role::where(['email'=>$data['email'],'role'=>'admin'])->delete();
        $data->delete();
        return "admin deleted successful";
    }
}
