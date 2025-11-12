<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeResource;
use App\Models\Department;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::orderBy('updated_at', 'desc')
            ->with('department') 
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
        $departments = Department::get();

        return Inertia::render('dashboard/employees/create', [
            'departments' => $departments,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $request)
    {
        $request->validated();

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
        $departments = Department::get();

        return Inertia::render('dashboard/employees/edit', [
            'employee' => $employee,
            'departments' => $departments,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeRequest $request, Employee $employee)
    {
        $request->validated();

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
