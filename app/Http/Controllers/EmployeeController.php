<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeResource;
use App\Http\Requests\EmployeeCreateRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::paginate(10);

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
    public function store(EmployeeCreateRequest $request)
    {
        $employee = Employee::create($request->only([
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
        ]));

        return redirect('/employees');
    }

    /**
     * Display the specified resource.
     */
    public function show($id = null)
    {
        return Inertia::render('dashboard/employee/show', [
            'employee' => Employee::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeUpdateRequest $request, $id = null)
    {
        $employee = Employee::findOrFail($id);

        $updateRequest = $request->validated();

        // if (!$request->filled('password')) {
        //     unset($updateRequest['password']);
        // } else {
        //     $updateRequest['password'] = Hash::make($request->input('password'));
        // }

        $employee->fill($updateRequest);

        $employee->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
