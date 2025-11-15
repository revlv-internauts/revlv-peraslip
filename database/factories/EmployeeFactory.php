<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Department;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => fake()->unique()->numerify('###########'),
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'middle_name' => fake()->lastName(),
            'date_of_hiring' => fake()->date('Y-m-d'),
            'email' => fake()->unique()->safeEmail(),
            'phone_number' => fake()->unique()->numerify('09#########'),
            'department_id' => Department::factory(),
            'bank_number' => fake()->unique()->numerify('#############'),
            'basic_pay' => fake()->randomNumber(3, 2),
            'sss_number' => fake()->unique()->numerify('##########'),
            'gsis_number' => fake()->unique()->numerify('###########'),
            'philhealth_number' => fake()->unique()->numerify('############'),
            'pagibig_number' => fake()->unique()->numerify('############'),
            'tin_number' => fake()->unique()->numerify('#########'),
        ];
    }
}
