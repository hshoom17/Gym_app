<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Subscription extends Model
{       use SoftDeletes, HasFactory, Notifiable;

        protected $fillable = [
                'start_date',
                'end_date',
                'type',
                'price',
                'status'
            ];  

        public function customers(){
        return $this->belongsToMany(Customer::class, 'customer_subscription','customer_id', 'Subscription_id')
        ->where('role',UserRoles::CUSTOMER);
        }
}
