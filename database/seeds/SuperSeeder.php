<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class SuperSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('super_admins')->insert([
            'name' => 'dhiraj superadmin',
            'email' => 'superadmin@gmail.com',
            'password' => Hash::make('123456'),
        ]);
        DB::table('roles')->insert([
            'email' => 'superadmin@gmail.com',
            'role'  => 'superAdmin',
        ]);
    }
}
