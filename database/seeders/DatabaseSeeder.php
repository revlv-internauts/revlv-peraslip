<?php

namespace Database\Seeders;

use App\Models\User;
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
            'last_name' => '01',
            'middle_name' => '',
            'email' => 'admin@mail.com',
            'password' => 'password',
        ]);

        // User::factory()->create([
        //     'first_name' => 'Kyle Matthew',
        //     'last_name' => 'Poblete',
        //     'middle_name' => 'Reyes',
        //     'email' => 'kyle@mail.com',
        //     'password' => 'password',
        // ]);

        User::factory(4)->create();
    }
}
