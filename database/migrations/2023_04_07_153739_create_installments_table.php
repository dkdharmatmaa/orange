<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstallmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('installments', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id',50)->nullable();
            $table->string('auth_id',50)->nullable();
            $table->string('subscription_refid',50)->nullable();
            $table->float('debit_amount',7,2)->nullable();
            $table->date('actual_debit_date')->nullable();
            $table->date('on_debit_date')->nullable();
            $table->enum('payment_status',['Pending','Success','Failed'])->nullable()->default('Pending');
            $table->tinyInteger('failed_count')->nullable()->default(0);
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
        Schema::dropIfExists('installments');
    }
}
