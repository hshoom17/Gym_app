<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
        public function user(){
            return $this->belongsTo(User::class);
            }
        public function branch(){
            return $this->belongsTo(Branch::class);
                    }
        public function workoutSession(){
            return $this->hasMany(WorkoutSession::class);
    }
            
}
