<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::get('/', [AuthController::class, 'loginPage'])->name('login');

Route::group(['middleware' => 'auth'], function () {
    Route::resource('/dashboard', UserController::class);

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
