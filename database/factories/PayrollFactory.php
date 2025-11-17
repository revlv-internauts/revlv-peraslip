<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Employee;
use Carbon\Carbon;

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
        // $startDate = Carbon::parse($request->input('start_date'))->format('Y-m-d');
        // $endDate = Carbon::parse($request->input('end_date'))->format('Y-m-d');

        $startDate = Carbon::parse($this->faker->dateTimeBetween('-1 year', 'now'))->toDateString();
        $endDate = Carbon::parse($this->faker->dateTimeBetween($startDate, $startDate)->format('Y-m-d') . ' +1 month')->toDateString();

        $statuses = ['pending', 'processing', 'successful', 'error'];

        $fakePath = 'payroll_' . $startDate . '_to_' . $endDate . '.xlsx';

        return [
            'employee_id' => fake()->randomElement(Employee::pluck('id')),
            'start_date' => $startDate,
            'end_date' => $endDate,
            // 'gross_pay' => fake()->randomNumber(3, 2),
            // 'deductions' => fake()->randomNumber(2, 2),
            // 'taxes' => fake()->randomNumber(5, 2),
            // 'net_pay' => fake()->randomNumber(3,2),
            'payment_date' => fake()->date('Y-m-d'),
            'payment_status' => fake()->randomElement($statuses),
            'file_path' => $fakePath,
        ];
    }
}
