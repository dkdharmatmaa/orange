<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomebindsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incomebinds', function (Blueprint $table) {
            $table->id();
            $table->integer('association_id');
            $table->integer('branch_id');
            $table->bigInteger('minmum_range')->nullable();
            $table->bigInteger('maximum_range')->nullable();
            $table->integer('no_of_people');
            $table->text('plans');
            $table->string('fields',250);
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
        Schema::dropIfExists('incomebinds');
    }
}
