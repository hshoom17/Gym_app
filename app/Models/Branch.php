<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    public function owner(){
            return $this->belongsTo(User::class)->where('role',UserRoles::BRANCH);
        
    }
    public function product(){
            return $this->hasMany(Product::class);
    }
    
    public function WorkoutSession(){
            return $this->hasMany(WorkoutSession::class);
    }

        public function coach(){
            return $this->hasMany(Coach::class);
    }
}
