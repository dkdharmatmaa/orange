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
            $table->string('invoice_number',50)->nullable();
            $table->string('invoice_id',50)->nullable();
            $table->string('mandate_id',50)->nullable();
            $table->string('order_id',50)->nullable();
            $table->string('transaction_id',50)->nullable();
            $table->string('subscription_refid',50)->nullable();
            $table->float('debit_amount',7,2)->nullable();
            $table->date('actual_debit_date')->nullable();
            $table->date('due_date')->nullable();
            $table->date('on_debit_date')->nullable();
            $table->integer('recived_no_of_installment')->nullable();
            $table->string('payment_method',20)->nullable();
            $table->string('payment_status',20)->nullable();
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
