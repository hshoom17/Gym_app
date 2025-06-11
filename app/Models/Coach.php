<?php

namespace App\Models;
use Spatie\MediaLibrary\HasMedia; 
use Spatie\MediaLibrary\InteractsWithMedia; 
use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Coach extends Model implements HasMedia
{    
    
    use SoftDeletes, HasFactory, Notifiable;
    protected $fillable = [
            'CV',
            'branch_id',
            'user_id'
            ];   
    protected $appends = [
        'mediaFile'
    ];
    use InteractsWithMedia;
     public function getMediaFileAttribute()
    {
        if ($this->relationLoaded('media')) {
            return $this->getFirstMedia();
        }
 
        return null;
    }
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
