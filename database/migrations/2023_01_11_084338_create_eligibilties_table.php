<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEligibiltiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eligibilties', function (Blueprint $table) {
            $table->id();
            $table->string('first_name',100);
            $table->string('last_name',100);
            $table->string('no_of_people',20);
            $table->string('email_id',50)->nullable();
            $table->string('phone',20);
            $table->string('birthday',20);
            $table->string('street_address',100);
            $table->string('address',100)->nullable();
            $table->integer('association_id');
            $table->integer('branch_id');
            $table->string('branch_name',100)->nullable();
            $table->string('city',50)->nullable();
            $table->string('state',50)->nullable();
            $table->integer('zip_code');
            $table->string('lead_id',100)->nullable();
            $table->enum('api_status',['Qualified','Not Qualified'])->default(null);
            $table->bigInteger('api_incomebind')->nullable();
            $table->enum('user_status',['Accepted','Deferred'])->default(null);
            $table->string('comment',250)->nullable();
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
        Schema::dropIfExists('eligibilties');
    }
}
