<?php

namespace Database\Factories;

use App\Models\Branch;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Soap\Url;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\coach>
 */
class coachFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'CV'=>fake()->imageUrl(),
            'branch_id' => Branch::factory(),
            'user_id' => User::factory(),
        ];
    }
}
