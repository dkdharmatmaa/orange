<?php

use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('branches')->insert([
            'name' => 'dhiraj branch',
            'branch_id' => 'qjhvhds',
            'association_id' => 1,
            'association_name' => 'dhiraj association',
            'address1' => 'jhgygew',
            'address2' => 'jhgygew',
            'city' => 'jhgygew',
            'state' => 'jhgygew',
            'zip_code' => 123456,
        ]);
    }
}
