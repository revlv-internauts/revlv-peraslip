<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentRequest;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departments = Department::orderBy('updated_at', 'desc')
            ->paginate(13);

        return Inertia::render('dashboard/departments/index', 
            ['departments' => DepartmentResource::collection($departments)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/departments/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DepartmentRequest $request)
    {
        $request->validated();

        // User::create([
        //     'role' => 'user',
        //     'name' => $request->name,
        //     'title' => $request->title,
        //     'email' => $request->email,
        //     'password' => $request->password,
        // ]);
        // $request->offsetSet('role', 'user'); // sets the default role when not specified

        Department::create($request->all());

        return to_route('departments.index');
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
    public function edit(Department $department)
    {
        return Inertia::render('dashboard/departments/edit', [
            'department' => $department,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DepartmentRequest $request, Department $department)
    {
        $request->validated();

        $department->update($request->all());

        return to_route('departments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department->delete();

        return to_route('departments.index');
    }
}
