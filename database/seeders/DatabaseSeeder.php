<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Coach;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use App\Models\Subscription;
use App\Models\User;
use App\Models\WorkoutSession;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Branch::factory(10)->create();
        Customer::factory(10)->has(Order::factory()->count(5)->has(Product::factory()->count(5)))->create();
        Coach::factory(10)->create();
        Product::factory(10)->create();
        Subscription::factory(10)->create();
        Branch::factory(10)->create();
        WorkoutSession::factory(10)->create();

    }
}
