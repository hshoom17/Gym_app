<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\Cast;

class WorkoutSession extends Model
{   use HasFactory;
    protected function casts(): array
    {
        return [
            
            'role' => UserRoles::class,
        ];
    }
        public function branch(){
            return $this->belongsTo(Branch::class);//->where('role',UserRoles::BRANCH);
            }
        public function coaches(){
            return $this->belongsTo(Coach::class);}

        public function customers(){
            return $this->belongsToMany(Customer::class,'customer_workout_session','customer_id','workout_session_id')
            ->where('role',UserRoles::CUSTOMER);
        }
}
