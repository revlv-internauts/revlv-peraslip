<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PayrollController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::get('/', [AuthController::class, 'loginPage'])->name('login');

Route::group(['middleware' => 'auth'], function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    // Payroll
    Route::resource('/payrolls', PayrollController::class);
    Route::get('/payrolls/{id}/export', [PayrollController::class, 'export'])->name('payrolls.export');

    // Employee
    Route::resource('/employees', EmployeeController::class);

    // User
    Route::resource('/users', UserController::class);

    // Configurations
    Route::resource('/departments', DepartmentController::class);

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
