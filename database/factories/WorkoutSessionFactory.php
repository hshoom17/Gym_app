<?php

namespace Database\Factories;

use App\Enums\WorkoutSessionsType;
use App\Models\Branch;
use App\Models\Coach;
use App\Models\WorkoutSession;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WorkoutSession>
 */
class WorkoutSessionFactory extends Factory
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
            'type'=>Arr::random(WorkoutSessionsType::cases())->value,
            'branch_id' => Branch::factory(),
            'coach_id' => Coach::factory(),
        ];
    }
}
