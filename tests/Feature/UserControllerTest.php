<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_user_creation(): void
    {
        $user = User::factory()->create();

        $payload = [
            'first_name' => 'John',
            'last_name' => 'Wick',
            'middle_name' => 'Doe',
            'email' => 'pencil@gmail.com',
            'password' => bcrypt('mangangaso'),
        ];

        $response = $this->actingAs($user)
            ->post('/users', $payload);

        $response->assertRedirect('/users');
        $this->assertDatabaseHas('users', [
            'email' => 'pencil@gmail.com'
        ]);
    }
}
