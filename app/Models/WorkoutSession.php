<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use PhpParser\Node\Expr\Cast;

class WorkoutSession extends Model
{   use SoftDeletes, HasFactory, Notifiable;
    protected $fillable = [
            'start_date',
            'end_date',
            'type',
            'coach_id'
            ]; 
    protected $attributes = [
        'coach_id'  => 1,
        'branch_id' => 1,
    ];  
    protected function casts(): array
    {
        return [
 
            'role' => UserRoles::class,
            'start_date' => 'dateTime',
            'end_date' => 'dateTime',
        ];
    }
        public function branch(){
            return $this->belongsTo(Branch::class);//->where('role',UserRoles::BRANCH);
            }
        public function coach(){
            return $this->belongsTo(Coach::class);}

        public function customers(){
            return $this->belongsToMany(Customer::class,'customer_workout_session','customer_id','workout_session_id')
            ->where('role',UserRoles::CUSTOMER);
        }
}
