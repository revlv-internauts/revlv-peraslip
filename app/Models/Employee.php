<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'first_name',
        'last_name',
        'middle_name',
        'date_of_hiring',
        'email',
        'phone_number',
        'bank_number',
        'basic_pay',
        'sss_number',
        'umid_number',
        'philhealth_number',
        'pagibig_number',
        'tin_number',
    ];

    public function payroll(): HasMany
    {
        return $this->hasMany(Payroll::class);
    }

    // $employee = Employee::find($employeeId); // Find employee by ID
    // $employeePayrolls = $employee->payrolls; // Access the related payrolls through the relations    
}
