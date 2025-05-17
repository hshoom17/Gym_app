<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Branch>
 */
class BranchFactory extends Factory
{
    use HasFactory;
    
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
            'dial_cod'=> fake()->numberBetween(1, 1000),
            'phone'=>fake()->phoneNumber(),
            'city'=>fake()->city(),
            'street'=>fake()->streetSuffix(),
            'latitude'=>fake()->latitude(),
            'longitude'=>fake()->longitude(),
            'user_id' => User::factory(),
            
        ];
    }
}
