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
            'name' => 'dhiraj association',
            'email' => 'admin@gmail.com',
            'number' => Str::random(10),
            'address1' => Str::random(10),
            'address2' => Str::random(10),
            'state' => Str::random(10),
            'city' => Str::random(10),
            'zip_code' => '110041',
            'password' => Hash::make('123456'),
        ]);
    }
}
