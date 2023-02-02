<?php

namespace App\Http\Controllers\superAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Branch;
use App\User;
use Illuminate\Support\Facades\Validator;
class BranchController extends Controller
{
    //
    public function index($id=0,$assos_id=0){
        if($id)
          $data=Branch::where('id',$id)->take(1)->get()->toArray();
        elseif($assos_id)
        $data=Branch::where('association_id',$assos_id)->get()->toArray();
        else
        $data=Branch::get()->toArray();
        
        return json_encode($data);
    }
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'branch_id' => ['required','string','max:100'],
            'association_id' => ['required','string','max:100'],
            'address1' => ['required','string','max:100'],
            'address2' => ['nullable','string','max:100'],
            'city' => ['required','string','max:100'],
            'state' => ['required','string','max:100'],
            'zip_code' => ['required','integer'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $branch=new Branch();
        $branch->name=$request->name;
        $branch->branch_id=$request->branch_id;
        $branch->address1=$request->address1;
        $branch->address2=$request->address2;
        $branch->city=$request->city;
        $branch->state=$request->state;
        $branch->zip_code=$request->zip_code;
        $association_data=explode('/////',$request->association_id);
        $branch->association_id=$association_data[0];
        $branch->association_name=$association_data[1];
        $branch->save();
        if($branch){
            return response()->json(['user'=>$branch,'status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'address1' => ['required','string','max:100'],
            'address2' => ['nullable','string','max:100'],
            'city' => ['required','string','max:100'],
            'state' => ['required','string','max:100'],
            'zip_code' => ['required','integer'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $branch=Branch::find($id);
        $branch->name=$request->name;
        $branch->address1=$request->address1;
        $branch->address2=$request->address2;
        $branch->city=$request->city;
        $branch->state=$request->state;
        $branch->zip_code=$request->zip_code;
        $branch->save();
        User::where('branch_id',$id)->update(['branch_name'=>$request->name]);
        if($branch){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
}
