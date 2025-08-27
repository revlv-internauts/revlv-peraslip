<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::get('/', [AuthController::class, 'loginPage'])->name('login');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/employees', EmployeeController::class);
    Route::resource('/users', UserController::class);

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
