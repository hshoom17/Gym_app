<?php

namespace Database\Factories;

use App\Enums\UserRoles;
use App\Enums\UserStatus;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'en_name' => fake()->name(),
            'ar_name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'dial_cod'=> fake()->numberBetween(1, 1000),
            'phone'=>fake()->phoneNumber(),
            'role'=>array_rand(UserRoles::all()),
            'status'=>array_rand(UserStatus::all()),
            'birthday'=>fake()->dateTime(),
            'gender'=>array_rand(['male','female']),
            'adress'=> 'KSA',
            'image'=>fake()->imageUrl(),
            'reg_date'=>fake()->dateTime()
       

        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
