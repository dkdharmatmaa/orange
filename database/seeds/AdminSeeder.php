<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('admins')->insert([
            'name' => 'Dhiraj Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123456'),
        ]);
        DB::table('roles')->insert([
            "email" => 'admin@gmail.com',
            "role" => 'admin',
        ]);
    }
}
