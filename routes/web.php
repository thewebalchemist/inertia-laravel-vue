<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\BlogController;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;


Route::get('login', [LoginController::class, 'create'])->name('login');
Route::post('login', [LoginController::class, 'store']);

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/create', [BlogController::class, 'create'])->name('blog.create');
Route::post('/blog', [BlogController::class, 'store'])->name('blog.store');
Route::get('/blog/{id}', [BlogController::class, 'show'])->name('blog.show');
Route::get('/blog/{id}/edit', [BlogController::class, 'edit'])->name('blog.edit');
Route::put('/blog/{id}', [BlogController::class, 'update'])->name('blog.update');

Route::middleware('auth')->group(function () {


});

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/users', function () {
    return Inertia::render('Users');
});

Route::get('/blogs', function () {
    return Inertia::render('Blogs/Index');
});

Route::get('/write', function () {
    return Inertia::render('Blogs/Create');
});

Route::get('/teachers', function () {
    return Inertia::render('Teachers',
    [
        'teachers' => Teacher::paginate(10)->through(
            fn ($teacher) => [
                'id' => $teacher->id,
                'name' => $teacher->name,
                'email' => $teacher->email,
                'subjects_specialities' => $teacher->subjects_specialities,
                'bio' => $teacher->bio,
                'hourly_rate' => $teacher->hourly_rate,
                'availability' => $teacher->availability,
                'location' => $teacher->location,
            ]
        )
    ]
    );
});

Route::get('/students', function () {
    return Inertia::render('Students/Index',
    [
        'students' => Student::query()
        ->when(Request::input('search'), function ($query, $search)
            {
                $query->where('name', 'LIKE', '%'.$search.'%')
                ->orWhere('email', 'LIKE', '%'.$search.'%')
                ->orWhere('subjects_interests', 'LIKE', '%'.$search.'%')
                ->orWhere('location', 'LIKE', '%'.$search.'%');
            })
        ->paginate(10)
        ->withQueryString()
        ->through(
            fn($student) => [
                'id' => $student->id,
                'name' => $student->name,
                'email' => $student->email,
                'availability' => $student->availability,
                'subjects_interests' => $student->subjects_interests,
                'location' => $student->location,
            ]),

        'filters' => Request::only(['search']),

    ]);
});


Route::get('/students/create', function (){
    return Inertia::render('Students/Create');
});


Route::post('/students', function () {
    $attributes = Request::validate([
        'name' => 'required',
        'email' => ['required', 'email'],
        'subjects_interests' => 'required',
        'availability' => 'required',
        'location' => 'required',
        'password' => 'required'
    ]);
    Student::create($attributes);

    return redirect('/students');
});

