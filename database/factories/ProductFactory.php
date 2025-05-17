<?php

namespace Database\Factories;

use App\Enums\UserRoles;
use App\Models\Branch;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
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
            'price'=>fake()->randomFloat(),
            'image'=>fake()->imageUrl(),
            'description' => fake()->paragraph(),
            'status'=>array_rand(UserRoles::all()),
            'branch_id' => Branch::factory(),
        ];
    }
}
