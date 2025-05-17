<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
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
            'customer_id' => Customer::factory(),
        ];
    }
}
