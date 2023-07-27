<?php

use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});


Route::get('/users', function () {
    return Inertia::render('Users');
});


Route::get('/teachers', function () {
    return Inertia::render('Teachers',
    [
        'teachers' => Teacher::all()
    ]
    );
});

Route::get('/students', function () {
    return Inertia::render('Students',
    [
        'students' => Student::all()
    ]);
});
