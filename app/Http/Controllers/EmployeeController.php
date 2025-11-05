<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeResource;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::orderBy('updated_at', 'desc') 
            ->paginate(13);

        return Inertia::render('dashboard/employees/index', 
            ['employees' => EmployeeResource::collection($employees)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/employees/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
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
                'integer',
            ],
            'bank_number' => [
                'required',
                'string',
                'min:13',
                'max:13',
            ],
            'basic_pay' => [
                'required',
                'integer',
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
        ]);

        Employee::create($request->all());

        return to_route('employees.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return Inertia::render('dashboard/employees/show', [
            'employee' => $employee,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        return Inertia::render('dashboard/employees/edit', [
            'employee' => $employee,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $request->validate([
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
                'integer',
            ],
            'bank_number' => [
                'required',
                'string',
                'min:13',
                'max:13',
            ],
            'basic_pay' => [
                'required',
                'integer',
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
        ]);

        $employee->update($request->all());

        return to_route('employees.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return to_route('employees.index');
    }
}
