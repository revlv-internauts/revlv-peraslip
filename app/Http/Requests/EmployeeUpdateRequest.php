<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'employee_id' => 'string|min:11',
            'first_name' => 'string',
            'last_name' => 'string',
            'middle_name' => 'nullable|string',
            'date_of_hiring' => 'string',
            'email' => 'required|email',
            'phone_number' => 'string|min:11',
            'department_id' => 'integer',
            'bank_number' => 'string|min:13',
            'basic_pay' => 'integer|min:200',
            'sss_number' => 'string|min:10',
            'umid_number' => 'string|min:12',
            'philhealth_number' => 'string|min:12',
            'pagibig_number' => 'string|min:12',
            'tin_number' => 'string|min:9',
        ];
    }
}
