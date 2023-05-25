<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id')->select('id','name');
    }
    public function branch()
    {
        return $this->hasOne(Branch::class, 'id', 'branch_id')->select('id','branch_name');
    }
    public function transaction()
    {
        return $this->hasOne(Transaction::class, 'id', 'transaction_id')->select('id','transaction_id','mandate_id','auth_id','installment_from','installment_to','no_of_installment','installment_amount','subscription_refid');
    }
}
