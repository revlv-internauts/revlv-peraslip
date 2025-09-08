<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('department_name')->unique();
            $table->timestamps();
        });

        DB::table('departments')->insert([
            ['department_name' => 'Software/IT Ops', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['department_name' => 'Network Operations Center', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['department_name' => 'Finance', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departments');
    }
};
