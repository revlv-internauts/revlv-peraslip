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
        'gsis_number',
        'philhealth_number',
        'pagibig_number',
        'tin_number',
    ];

    public function payrolls(): HasMany
    {
        return $this->hasMany(Payroll::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function getFullName(): string
    {
        return $this->first_name . " " . $this->last_name;
    }
}
