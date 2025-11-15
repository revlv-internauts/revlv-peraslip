<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique();
            $table->string('employee_id')->unique();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name')->nullable();
            $table->date('date_of_hiring');
            $table->string('email')->unique();
            $table->string('phone_number')->unique();
            // $table->string('employee_type');
            $table->string('bank_number')->unique();
            $table->decimal('basic_pay', 10, 2);
            $table->string('sss_number')->unique();
            $table->string('gsis_number')->unique();
            $table->string('philhealth_number')->unique();
            $table->string('pagibig_number')->unique();
            $table->string('tin_number')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
