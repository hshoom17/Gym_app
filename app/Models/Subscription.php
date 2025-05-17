<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{       use HasFactory;
        public function customers(){
        return $this->belongsToMany(Customer::class, 'customer_subscription','cumtomer_id', 'Subscription_id')
        ->where('role',UserRoles::CUSTOMER);
        }
}
