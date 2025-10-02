<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Employee extends Model
{
    use HasFactory, HasUuids;

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'employee_id',
        'first_name',
        'last_name',
        'middle_name',
        'date_of_hiring',
        'email',
        'phone_number',
        'department_id',
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
        return $this->hasMany(Payroll::class, 'employee_id');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    // $employee = Employee::find($employeeId); // Find employee by ID
    // $employeePayrolls = $employee->payrolls; // Access the related payrolls through the relations    

    public function getFullName(): string
    {
        return $this->first_name . " " . $this->last_name;
    }
}
