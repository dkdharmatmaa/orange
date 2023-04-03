<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use Illuminate\Support\Facades\Validator;
class ProductController extends Controller
{
    //
    public function index($id=0){
        if($id)
        $data=Product::where('id',$id)->first();
        else
        $data=Product::all();
        return json_encode($data);
    }
    public function index_option(){
        $data=Product::all()->groupBy('id');
        return json_encode($data);
    }
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'duration' => ['required','string','max:20'],
            'frequency' => ['required'],
            'price' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $product=new Product();
        $product->name=$request->name;
        $product->duration=$request->duration;
        $product->frequency=json_encode($request->frequency);
        $product->price=$request->price;
        $product->is_active=1;
        $product->save();
        if($product){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }

    public function update(Request $request,$id){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'duration' => ['required','string','max:20'],
            'frequency' => ['required'],
            'price' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $product=Product::find($id);
        $product->name=$request->name;
        $product->duration=$request->duration;
        $product->frequency=json_encode($request->frequency);
        $product->price=$request->price;
        $product->is_active=1;
        $product->save();
        if($product){
            return response()->json(['status'=>true]);
        }
        else{
           return response()->json(['status'=>false]);
        }
    }

    public function delete($id){
        Product::find($id)->delete();
        return "product deleted";
    }
}
