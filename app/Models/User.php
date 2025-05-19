<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Enums\UserRoles;
use App\Enums\UserStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
            'en_name',
'ar_name',
'email',
'email_verified_at',
'dial_cod',
'phone',
'password',
'role',
'status',
'birthday',
'gender',
'adress',
'image',
'reg_date',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'role' => UserRoles::class,
            'status' => UserStatus::class
        ];
    }

        public function branches(){
            return $this->hasOne(Branch::class);//->where('role',UserRoles::BRANCH);
        }

        public function coaches(){
            return $this->hasOne(Coach::class);
        }

        public function customers(){
            return $this->hasOne(Customer::class)->where('role',UserRoles::CUSTOMER);
        }
}
