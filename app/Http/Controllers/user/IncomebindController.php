<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Incomebind;
class IncomebindController extends Controller
{
    public function index($branch_id){
        $assoc_id=auth()->guard('user-api')->user()->association_id;
        $data=Incomebind::where([['association_id',$assoc_id],['branch_id',$branch_id]])->get()->groupBy('minmum_range')->toArray();
        return json_encode($data);
    }
}
