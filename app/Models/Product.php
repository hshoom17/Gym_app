<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Product extends Model
{       
    use SoftDeletes, HasFactory, Notifiable;
        public function branch(){
            return $this->belongsTo(Branch::class);//->where('role',UserRoles::BRANCH);
    }

        public function orders(){
            return $this->belongsToMany(Order::class, 'order_product', 'product_id', 'order_id');
                //->withPivot('quantity')
                //->withTimestamps();
}
}