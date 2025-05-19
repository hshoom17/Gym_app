<?php

namespace Database\Factories;

use App\Enums\UserRoles;
use App\Enums\UserStatus;
use App\Models\Branch;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

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
            'status'=>Arr::random(UserStatus::cases())->value,
            'branch_id' => Branch::factory(),
        ];
    }
}
