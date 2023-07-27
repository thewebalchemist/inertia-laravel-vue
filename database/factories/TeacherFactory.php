<?php

namespace Database\Factories;

use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeacherFactory extends Factory
{
    protected $model = Teacher::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // Change 'password' to the desired default password
            'subjects_specialities' => $this->faker->words(3, true),
            'bio' => $this->faker->paragraph,
            'hourly_rate' => $this->faker->randomFloat(2, 10, 100),
            'availability' => $this->faker->boolean,
            'location' => $this->faker->city,
        ];
    }
}
