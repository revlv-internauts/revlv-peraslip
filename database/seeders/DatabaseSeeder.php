<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Employee;
use App\Models\Payroll;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'first_name' => 'Admin',
            'last_name' => '1',
            'middle_name' => '',
            'email' => 'admin@mail',
            'password' => 'password',
        ]);
        User::factory()->create([
            'first_name' => 'Kyle Matthew',
            'last_name' => 'Poblete',
            'middle_name' => 'Reyes',
            'email' => 'kyle@revlv.com',
            'password' => 'password',
        ]);

        User::factory(18)->create();

        Employee::factory(20)->create();

        Payroll::factory(30)->create();
    }
}
