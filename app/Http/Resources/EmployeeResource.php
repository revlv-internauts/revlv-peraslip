<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->getKey(),
            'employee_id' => $this->employee_id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'middle_name' => $this->middle_name,
            'full_name' => $this->getFullName(),
            'date_of_hiring' => $this->date_of_hiring,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'department_id' => $this->department_id,
            'bank_number' => $this->bank_number,
            'basic_pay' => $this->basic_pay,
            'sss_number' => $this->sss_number,
            'umid_number' => $this->umid_number,
            'philhealth_number' => $this->philhealth_number,
            'pagibig_number' => $this->pagibig_number,
            'tin_number' => $this->tin_number,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
