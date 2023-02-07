<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
class Eligibilty extends Model
{
    //
    // use HasFactory;
    public function plans(){
        return $this->hasOne(Incomebind::class,'id','plan_id')->select('id','plans');
    }
    public function association(){
        return $this->hasOne(Association::class,'id','association_id')->select('id','pre_text','name');    
    }
    public function branch(){
        return $this->hasOne(Branch::class,'id','branch_id')->select('id','name');
    }
}
