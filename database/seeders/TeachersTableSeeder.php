<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TeachersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Teacher::factory(20)->create();
    }
}
