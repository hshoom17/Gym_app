<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{       use HasFactory;
        public function customer(){
                return $this->belongsTo(Customer::class)->where('role',UserRoles::CUSTOMER);
        }
        public function products(){
                return $this->belongsToMany(Product::class, 'order_product','order_id', 'product_id');
        }
}

