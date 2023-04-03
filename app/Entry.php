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
}
