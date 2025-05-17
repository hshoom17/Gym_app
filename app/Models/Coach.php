<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{       
    use HasFactory;
        public function user(){
            return $this->belongsTo(User::class);
            }
        public function branch(){
            return $this->belongsTo(Branch::class);//->where('role',UserRoles::BRANCH);
                    }
        public function workoutSession(){
            return $this->hasMany(WorkoutSession::class);
    }
            
}
