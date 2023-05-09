<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    //
    public function entry()
    {
        return $this->hasOne(Entry::class, 'transaction_id', 'id')->select('id','transaction_id','name','email','phone_number','mbo_id');
    }
}
