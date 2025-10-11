<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeResource;
use App\Http\Requests\EmployeeCreateRequest;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::all();

        return Inertia::render('Dashboard/Employees/Index', 
            ['employees' => EmployeeResource::collection($employees)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Employees/Create');
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
    public function show(string $id)
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
