<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
            'employee_id' => [
                'required',
                'string',
                'min:11',
                'max:11',
            ],
            'first_name' => [
                'required',
                'string',
            ],
            'last_name' => [
                'required',
                'string',
            ],
            'middle_name' => [
                'required',
                'string',
            ],
            'date_of_hiring' => [
                'required',
                'string',
            ],
            'email' => [
                'required',
                'string',
                'email',
            ],
            'phone_number' => [
                'required',
                'string',
                'min:11',
                'max:11',
            ],
            'department_id' => [
                'required',
                'exists:departments,id',
            ],
            'bank_number' => [
                'required',
                'string',
                'min:13',
                'max:13',
            ],
            'basic_pay' => [
                'required',
                'numeric',
                'min:200',
            ],
            'sss_number' => [
                'required',
                'string',
                'min:10',
                'max:10',
            ],
            'umid_number' => [
                'required',
                'string',
                'min:12',
                'max:12',
            ],
            'philhealth_number' => [
                'required',
                'string',
                'min:12',
                'max:12',
            ],
            'pagibig_number' => [
                'required',
                'string',
                'min:12',
                'max:12',
            ],
            'tin_number' => [
                'required',
                'string',
                'min:9',
                'max:9',
            ],
        ];
    }
}
