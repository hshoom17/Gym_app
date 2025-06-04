<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Branch extends Model
{       
        use SoftDeletes, HasFactory, Notifiable;

    public function owner(){
            return $this->belongsTo(User::class);//->where('role',UserRoles::BRANCH);
        
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
