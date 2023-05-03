<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Installment extends Model
{
    //
    public function transaction()
    {
        return $this->hasOne(Transaction::class, 'subscription_refid', 'subscription_refid')->select('id','transaction_id','subscription_refid');
    }
    public function entry()
    {
        return $this->hasOne(Entry::class, 'transaction_id', 'id')->select('id','name','email','phone_number');
    }
}
