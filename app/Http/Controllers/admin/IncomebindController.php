<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Incomebind;
use Illuminate\Support\Facades\DB;
class IncomebindController extends Controller
{
    public function index($branch_id){
        $assoc_id=auth()->guard('admin-api')->user()->association_id;
        $data=Incomebind::where([['association_id',$assoc_id],['branch_id',$branch_id]])->get()->groupBy('minmum_range')->toArray();
        return json_encode($data);
    }
    public function single_matrix($branch_id,$minmum_range,$maximum_range){
        $assos_id=auth()->guard('admin-api')->user()->association_id;
        $data=Incomebind::where([['association_id',$assos_id],['branch_id',$branch_id],['minmum_range',$minmum_range],['maximum_range',$maximum_range]])->get()->toArray();
        return json_encode($data);
    }
    public function store(Request $request,$branch_id){
        $assos_id=auth()->guard('admin-api')->user()->association_id;
        if(!empty($assos_id) and !empty($branch_id)){
            $total_range = count($request->all());
            for($i=0;$i<$total_range;$i++){
                $main_data=$request[$i]['items'];
                $main_fields=json_encode($request[$i]['fields']);
                $total_paln=count((array)$main_data);
                for($j=0;$j<$total_paln;$j++){
                    if(!empty($main_data[$j]['no_of_people'])){
                    $incomebind=New Incomebind();
                    $incomebind->association_id=$assos_id;
                    $incomebind->branch_id=$branch_id;
                    $incomebind->minmum_range=$request[$i]['minmum_range'];
                    $incomebind->maximum_range=$request[$i]['maximum_range'];
                    $incomebind->no_of_people=$main_data[$j]['no_of_people'];
                    $incomebind->plans=json_encode($main_data[$j]);
                    $incomebind->fields=$main_fields;
                    $incomebind->save();
                    $incomebind=null;
                    }
                }
            }
            return json_encode(['status'=>true,'message'=>"Data insert successful"]);
        } 
        else{
            return json_encode(['status'=>false,'message'=>"Select correct Association and Branch"]);
        }
    }
    public function update(Request $request,$branch_id,$minmum_range,$maximum_range){
        $assos_id=auth()->guard('admin-api')->user()->association_id;
        //before insert delete all plan for this income range
        DB::table('incomebinds')->where([['association_id',$assos_id],['branch_id',$branch_id],['minmum_range',$minmum_range],['maximum_range',$maximum_range]])->delete();
       
        // now insert
        $main_fields=json_encode($request->fields);
        $minmum_range=$request->minmum_range;
        $maximum_range=$request->maximum_range;
        $main_items=$request->items;
        for($j=0;$j<sizeof($main_items);$j++){
            if(!empty($main_items[$j]['no_of_people'])){
            $incomebind=New Incomebind();
            $incomebind->association_id=$assos_id;
            $incomebind->branch_id=$branch_id;
            $incomebind->minmum_range=$minmum_range;
            $incomebind->maximum_range=$maximum_range;
            $incomebind->no_of_people=$main_items[$j]['no_of_people'];
            $incomebind->plans=json_encode($main_items[$j]);
            $incomebind->fields=$main_fields;
            $incomebind->save();
            $incomebind=null;
            }
            else{
                return json_encode(['status'=>false,'message'=>"No of people is not arranged properly"]);
            }
        }
        return json_encode(['status'=>true,'message'=>"Data update successful"]);
    }
    public function delete($minmum_range,$branch_id){
        $assoc_id=auth()->guard('admin-api')->user()->association_id;
        $incomebind = Incomebind::where([['minmum_range',$minmum_range],['association_id',$assoc_id],['branch_id',$branch_id]])->delete();
        if($incomebind){
            return response()->json(['status'=>true,'message'=>'Data delete successful']);
        }
        else{
           return response()->json(['status'=>false,'message'=>'fauiler']);
        }
    }
}
