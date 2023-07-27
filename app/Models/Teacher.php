<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'subjects_specialities',
        'bio',
        'hourly_rate',
        'availability',
        'location',
    ];
}

