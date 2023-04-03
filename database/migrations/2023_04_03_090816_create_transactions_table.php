<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('order_id',50)->nullable();
            $table->string('transaction_id',100)->nullable();
            $table->dateTime('transaction_date')->nullable();
            $table->float('charge_amount',7,2)->nullable();
            $table->string('customer_refid',50)->nullable();
            $table->string('subscription_refid',50)->nullable();
            $table->date('installment_from')->nullable();
            $table->date('installment_to')->nullable();
            $table->float('installment_amount')->nullable();
            $table->integer('no_of_installment')->nullable();
            $table->string('frequency',20)->nullable();
            $table->string('debit_day',20)->nullable();
            $table->enum('payment_installment',['oneTime','EMI'])->nullable()->default('oneTime');
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
        Schema::dropIfExists('transactions');
    }
}
