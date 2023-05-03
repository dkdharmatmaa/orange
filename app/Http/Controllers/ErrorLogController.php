<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Error;
class ErrorLogController extends Controller
{
    //
    public function index(Request $request){
        $data=Error::where([['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->orderBy('created_at', 'desc')->get();
        return json_encode($data);
    }
}
