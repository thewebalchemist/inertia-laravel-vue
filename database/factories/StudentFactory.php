<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudentFactory extends Factory
{
    protected $model = Student::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // Change 'password' to the desired default password
            'availability' => $this->faker->boolean,
            'subjects_interests' => $this->faker->words(3, true),
            'location' => $this->faker->city,
        ];
    }
}
