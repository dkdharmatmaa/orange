<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Entry;
use Illuminate\Support\Facades\Validator;
class EntryController extends Controller
{
    //
    public function index(Request $request){
        if($request->membership_type){
            $data=Entry::with('product','branch')->where([['product_id',$request->membership_type],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','transaction_id','name','membership_price','payment_type','product_id','branch_id','payment_status','payment_by','created_at')->orderBy('created_at', 'desc')->get();
        }
        else{
            $data=Entry::with('product','branch')->where([['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','transaction_id','name','membership_price','payment_type','product_id','branch_id','payment_status','payment_by','created_at')->orderBy('created_at', 'desc')->get();
        }
        return json_encode($data);
    }
    public function index_single($id){
        $data=Entry::with('product','branch')->where('id',$id)->first();
        return json_encode($data);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'date' => ['required'],
            'mbo_id' => ['required'],
            'email' => ['required','email'],
            'phone_number' => ['required','regex:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/'],
            'product_id' => ['required','integer'],
            'payment_type' => ['required'],
            'frequency' => ['required'],
            'membership_price' => ['required'],
            'branch_id' => ['required','integer'],
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $entry=new Entry();
        $entry->name=$request->name;
        $entry->date=explode("T",$request->date)[0];
        $entry->mbo_id=$request->mbo_id;
        $entry->email=$request->email;
        $entry->phone_number=$request->phone_number;
        $entry->product_id=$request->product_id;
        $entry->payment_type=$request->payment_type;
        $entry->frequency=$request->frequency;
        $entry->membership_price=$request->membership_price;
        if($request->advance_payment)
        $entry->advance_payment=$request->advance_payment;
        else
        $entry->advance_payment=$request->membership_price;
        $entry->recurring_amount=$request->recurring_amount;
        $entry->branch_id=$request->branch_id;
        $entry->comment=$request->comment;
        if($request->is_email)
        $entry->is_email=$request->is_email;
        $entry->payment_status='Success';
        $entry->transaction_id=auth()->user()->id.time();
        $entry->payment_by=$request->name;
        $entry->save();
        if($entry){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        } 
    }
}
