<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
        public function customer(){
                return $this->belongsTo(Customer::class);
        }
        public function products(){
                return $this->belongsToMany(Product::class, 'order_product','order_id', 'product_id');
        }
}

