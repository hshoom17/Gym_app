<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;


class Customer extends Model
{   use SoftDeletes, HasFactory, Notifiable;
    protected $fillable = [
            'height',
            'weight',
            'user_id'
            ];  
    public function user(){
            return $this->belongsTo(User::class);
        }
    public function order(){
            return $this->hasMany(Order::class);
    }
    public function subscriptions(){
            return $this->belongsToMany(Subscription::class, 'customer_subscription','customer_id', 'Subscription_id');
        }
    public function work_session(){
            return $this->belongsToMany(WorkoutSession::class,'customer_workout_session','customer_id','workout_session_id');
        }

}
