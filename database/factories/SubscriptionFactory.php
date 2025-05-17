<?php

namespace Database\Factories;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\subscription>
 */
class subscriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'start_date'=>fake()->dateTime(),
            'end_date'=>fake()->dateTime(),
            'price'=>fake()->randomFloat(),
            'status'=>array_rand(UserRoles::all()),
        ];
    }
}
