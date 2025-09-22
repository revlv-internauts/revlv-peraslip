<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Employee;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payroll>
 */
class PayrollFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = $this->faker->dateTimeBetween('-1 year', 'now');
        $endDate = $this->faker->dateTimeBetween($startDate, $startDate->format('Y-m-d') . ' +1 month');

        $statuses = ['pending', 'processing', 'successful', 'error'];

        return [
            'employee_id' => fake()->randomElement(Employee::pluck('id')),
            'pay_period_start_date' => $startDate,
            'pay_period_end_date' => $endDate,
            'gross_pay' => fake()->randomNumber(3, 2),
            'deductions' => fake()->randomNumber(2, 2),
            'taxes' => fake()->randomNumber(5, 2),
            'net_pay' => fake()->randomNumber(3,2),
            'payment_date' => fake()->date('Y-m-d'),
            'payment_status' => fake()->randomElement($statuses),
        ];
    }
}
