<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    public function loginPage()
    {
        return Inertia::render('auth/login');
    }

    public function login(LoginRequest $loginRequest)
    {
        $loginRequest->authenticate();
        $loginRequest->session()->regenerate();
        return redirect()->intended('/dashboard');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->intended('/');
    }
}
