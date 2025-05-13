<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
        public function customers(){
        return $this->belongsToMany(Customer::class, 'customer_subscription','cumtomer_id', 'Subscription_id');
        }
}
