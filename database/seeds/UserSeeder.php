<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'dhiraj user',
            'email' => 'user@gmail.com',
            'association_id' => 1,
            'branch_id' => 1,
            'branch_name' => 'dhiraj branch',
            'password' => Hash::make('123456'),
        ]);
    }
}
