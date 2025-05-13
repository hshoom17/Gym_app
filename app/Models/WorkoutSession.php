<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkoutSession extends Model
{
        public function branch(){
            return $this->belongsTo(Branch::class);
            }
        public function coaches(){
            return $this->belongsTo(Coach::class);}

        public function customers(){
            return $this->belongsToMany(Customer::class,'customer_workout_session','customer_id','workout_session_id');
        }
}
