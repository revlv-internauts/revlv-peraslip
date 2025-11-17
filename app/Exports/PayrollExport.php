<?php

namespace App\Exports;

use App\Models\Employee;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithTitle;

class PayrollExport implements FromCollection, WithHeadings, WithMapping, WithTitle
{
    protected $startDate;
    protected $endDate;

    public function __construct(string $startDate, string $endDate)
    {
        $this->startDate = $startDate;
        $this->endDate = $endDate;

        // throw new \Exception('Not implemented');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Employee::all();
    }

    public function headings(): array
    {
        return [
            'Employee ID',
            'Name',
            'Email',
            'Date of Hiring',
            'Basic Salary',
            'Starting Period',
            'Ending Period',

        ];
    }

    public function map($employee): array
    {
        return [
            $employee->id,
            $employee->getFullName(),
            $employee->email,
            $employee->date_of_hiring,
            $employee->basic_pay,
            Carbon::parse($this->startDate)->format('Y-m-d'),
            Carbon::parse($this->endDate)->format('Y-m-d'),
        ];
    }

    public function title(): string
    {
        return 'Payroll from' . $this->startDate . ' to ' . $this->endDate;
    }
}
