<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Association extends Model
{
    //
    public function admins(){
        return $this->hasMany(Admin::class,'association_id','id');
    }
}
