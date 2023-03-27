<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Entry;
use Illuminate\Support\Facades\Validator;
class EntryController extends Controller
{
    //
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'date' => ['required'],
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
        $entry->date=$request->date;
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
        $entry->save();
        if($entry){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        } 
    }
}
