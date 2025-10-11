<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(10);
        // $users = User::orderBy('id', 'asc')
        //     ->get();

        return Inertia::render('Dashboard/Users/Index',
            ['users' => UserResource::collection($users)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserCreateRequest $request)
    {
        $user = User::create($request->only([
            'first_name',
            'last_name',
            'middle_name',
            'email',
            'password',
        ]));

        return redirect('/users');
    }

    /**
     * Display the specified resource.
     */
    public function show($id = null)
    {
        return Inertia::render('Dashboard/Users/Show', [
            'user' => User::findOrFail($id),
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
    public function update(UserUpdateRequest $request, $id = null)
    {
        $user = User::findOrFail($id);

        $updateRequest = $request->validated();

        if (!$request->filled('password')) {
            unset($updateRequest['password']);
        } else {
            $updateRequest['password'] = Hash::make($request->input('password'));
        }

        $user->fill($updateRequest);

        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);

        $user->delete();
    }
}
