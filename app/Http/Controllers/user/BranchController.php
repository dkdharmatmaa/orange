<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Branch;
use Illuminate\Support\Facades\Validator;
class BranchController extends Controller
{
    //
    public function index($id=0,$all_data=null){
        $assoc_id=auth()->guard('user-api')->user()->association_id;
        if($id)
          $data=Branch::where('id',$id)->take(1)->get()->toArray();
        elseif($all_data=='all'){
        $data=Branch::where('association_id',$assoc_id)->get()->toArray();
        }  
        else{
        $data=Branch::where('association_id',$assoc_id)->select('id','name')->get()->toArray();
        }
        return json_encode($data);
    }
}
