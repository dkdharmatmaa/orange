<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBranchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->string('name',50);
            $table->string('branch_id',50);
            $table->bigInteger('association_id')->unsigned()->index();
            $table->string('association_name',100)->nullable();
            $table->string('address1',100);
            $table->string('address2',100)->nullable();
            $table->string('city',50);
            $table->string('state',50);
            $table->integer('zip_code');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branches');
    }
}
