<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
        public function branch(){
            return $this->belongsTo(Branch::class);
    }

        public function orders(){
            return $this->belongsToMany(Order::class, 'order_product', 'product_id', 'order_id');
}
}