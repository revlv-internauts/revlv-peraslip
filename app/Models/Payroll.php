<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payroll extends Model
{
    use HasFactory, HasUuids;

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'employee_id',
        'pay_period_start_date',
        'pay_period_end_date',
        'gross_pay',
        'deductions',
        'taxes',
        'net_pay',
        'payment_date',
        'payment_status',
    ];

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    // $payrolls = Payroll::all(); // Retrieves all payroll records as a collection

    // $payrollsWithEmployees = Payroll::with('employee')->get(); // Eager load the employee data
}
