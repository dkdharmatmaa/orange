<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entries', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_id',100)->nullable();
            $table->string('name',100);
            $table->date('date');
            $table->string('mbo_id',50)->nullable();
            $table->string('phone_number',15)->nullable();
            $table->string('email',50)->nullable();
            $table->integer('product_id');
            $table->string('payment_type',30);
            $table->float('membership_price',11,2)->default(0);
            $table->float('advance_payment',11,2)->default(0);
            $table->float('recurring_amount',11,2)->nullable();
            $table->string('payment_status',50)->nullable();
            $table->string('payment_by',100)->nullable();
            $table->integer('branch_id');
            $table->string('comment')->nullable();
            $table->boolean('is_email')->default(0);
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
        Schema::dropIfExists('entries');
    }
}
