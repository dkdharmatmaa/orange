<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Branch;
use App\User;
use App\Association;
use App\Eligibilty;
use App\Incomebind;
use Illuminate\Support\Facades\Validator;
class BranchController extends Controller
{
    //
    public function index($id=0){
        if($id)
        $data=Branch::where('id',$id)->first();
        else
        $data=Branch::all();
        return json_encode($data);
    }
    public function option_index(){
        $data=Branch::all(['id','branch_name'])->toArray();
        return json_encode($data);
    }
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'branch_name' => ['required', 'string', 'max:100'],
            'branch_id' => ['required','string','max:100'],
            'branch_location' => ['required','string','max:100'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $branch=new Branch();
        $branch->branch_name=$request->branch_name;
        $branch->branch_id=$request->branch_id;
        $branch->branch_location=$request->branch_location;
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
            'branch_name' => ['required', 'string', 'max:100'],
            'branch_location' => ['required','string','max:100'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $branch=Branch::find($id);
        $branch->branch_name=$request->branch_name;
        $branch->branch_location=$request->branch_location;
        $branch->save();
        if($branch){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }
    public function delete($id){
        Branch::where('id',$id)->delete();
        return json_encode(['status'=>true]);
        
    }
}
