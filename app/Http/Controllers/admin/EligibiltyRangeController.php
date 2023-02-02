<?php

namespace App\Http\Controllers\admin;
set_time_limit(6000); 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PDF;
use App\Eligibilty;
use App\Incomebind;
use App\Branch;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Http;
class EligibiltyRangeController extends Controller
{
    public function index(Request $request){
        $assoc_id=auth()->guard('admin-api')->user()->id;
        if($request->per_page){
                if($request->branch_id){
                    if($request->api_status=='Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['branch_id',$request->branch_id],['api_status','Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->take($request->per_page)->toArray();
                    elseif($request->api_status=='Not Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['branch_id',$request->branch_id],['api_status','Not Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->take($request->per_page)->toArray();
                    else
                    $data=Eligibilty::where([['association_id',$assoc_id],['branch_id',$request->branch_id],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->take($request->per_page)->toArray();
                }
                else{
                    if($request->api_status=='Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['api_status','Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->take($request->per_page)->toArray();
                    elseif($request->api_status=='Not Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['api_status','Not Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->take($request->per_page)->toArray();
                    else
                    $data=Eligibilty::where([['association_id',$assoc_id],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->take($request->per_page)->toArray();
                }
        }
        else{
                if($request->branch_id){
                    if($request->api_status=='Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['branch_id',$request->branch_id],['api_status','Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->toArray();
                    elseif($request->api_status=='Not Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['branch_id',$request->branch_id],['api_status','Not Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->toArray();
                    else
                    $data=Eligibilty::where([['association_id',$assoc_id],['branch_id',$request->branch_id],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->toArray();
                }
                else{
                    if($request->api_status=='Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['api_status','Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->toArray();
                    elseif($request->api_status=='Not Qualified')
                    $data=Eligibilty::where([['association_id',$assoc_id],['api_status','Not Qualified'],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->toArray();
                    else
                    $data=Eligibilty::where([['association_id',$assoc_id],['created_at','>=',$request->from_date_custome],['created_at','<=',$request->till_date_custome]])->select('id','first_name','last_name','executive_name','branch_name','phone','birthday','no_of_people','created_at','api_status')->get()->toArray();
                }
        }
        
        return json_encode($data);
    }

    public function check_eligibilty(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'total_people' => ['required', 'string', 'max:100'],
            'phone' => ['required','regex:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/'],
            'birthday' => ['required', 'string', 'max:20'],
            'street_address' => ['required','string','max:100'],
            'address' => ['nullable','string','max:100'],
            'city' => ['required','string','max:100'],
            'state' => ['required','string','max:100'],
            'zip_code' => ['required','regex:/\b\d{5}\b/'],
            'branch_id' => ['required','string','max:100']
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $assoc_id=auth()->guard('admin-api')->user()->id;
        $eligibilty=new Eligibilty();
        $eligibilty->first_name=$request->first_name;
        $eligibilty->last_name=$request->last_name;
        $eligibilty->no_of_people=$request->total_people;
        $eligibilty->email_id=$request->email;
        $eligibilty->phone=$request->phone;
        $eligibilty->birthday=$request->birthday;
        $eligibilty->street_address=$request->street_address;
        $eligibilty->address=$request->address;
        $eligibilty->city=$request->city;
        $eligibilty->state=$request->state;
        $eligibilty->zip_code=$request->zip_code;
        $eligibilty->lead_id=$request->lead_id;
        $branch_data=explode('/////',$request->branch_id);
        $eligibilty->branch_id=$branch_data[0];
        $eligibilty->branch_name=$branch_data[1];
        $eligibilty->association_id=$assoc_id;
        $eligibilty->executive_name="association admin";
        $eligibilty->save();
        $total_income=0;
        // =======API call==========
        $data_params="?zip=$request->zip_code&first=$request->first_name&last=$request->last_name&address=$request->street_address";
        $response = Http::withHeaders([
            'Accept' => 'application/json, application/json',
            'Content-Type' => 'application/json',
            'x-api-key' => env('api_key'),
            ])->post("https://api.thedataai.com/v2/match/individual$data_params", []);
        $main_data=json_decode($response,true);
        if($main_data['data']['match'])
        $total_income=$main_data['data']['match']['lu_inc_model_v6_amt']*1000;
        // =========Api call=========

        if($total_income){
            Eligibilty::where('id',$eligibilty->id)->update(['api_status'=>"Qualified",'api_incomebind'=>$total_income]);
            $palns=Incomebind::where([['association_id','=',$eligibilty->association_id],['branch_id','=',$eligibilty->branch_id],['no_of_people','=',$eligibilty->no_of_people],['minmum_range','<=',$total_income],['maximum_range','>',$total_income]])->select('id','minmum_range','maximum_range','plans')->first();
            if($palns){
            $data['plans']=$palns;
            }
            else{
                $palns_exception=Incomebind::where([['association_id','=',$eligibilty->association_id],['branch_id','=',$eligibilty->branch_id],['minmum_range','<=',$total_income],['maximum_range','>',$total_income]])->select('id','minmum_range','maximum_range','plans')->orderBy('no_of_people','desc')->take(1)->first();
                $data['plans']=$palns_exception;
            }
            $data['details']=$eligibilty;
            return json_encode(['status'=>true,'message'=>"Data get from API",'data'=>$data],true);
        }
        else{
            Eligibilty::where('id',$eligibilty->id)->update(['api_status'=>"Not Qualified"]);
            $data['details']=$eligibilty;
            return json_encode(['status'=>false,'message'=>"This user is Not Qualified",'data'=>$data],false);
        }
    }
    public function add_comment(Request $request,$id){
        Eligibilty::where('id',$id)->update(['comment'=>$request->comment,'user_status'=>$request->status]);
        return json_encode(['status'=>true,'message'=>"Data updated successful"]);
    }
    public function print_eligibilty($main_message,$plans_str,$user_details_str,$comment=''){
        $plans=json_decode($plans_str,true);
        $user_details=json_decode($user_details_str,true);
        $branch_id=$user_details['branch_id'];
        $branch_name=Branch::where('id',$branch_id)->select('name')->first()->toArray()['name'];
        $pdf = PDF::loadView('eligibiltyStatus',compact('plans','user_details','main_message','comment','branch_name'));
        return $pdf->stream('EligibiltyStatus.pdf');
        // return view('eligibiltyStatus',compact('plans','user_details','main_message','comment','branch_name')); 
    }
}
