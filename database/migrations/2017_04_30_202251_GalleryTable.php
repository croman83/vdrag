<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class GalleryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('GalleryTable', function (Blueprint $table) {
            $table->increments('id');
            $table->string('img');
            $table->string('title');
            $table->text('text');
            $table->string('colname');
            $table->string('link');
            $table->timestamps();
        });
    }


    public function run()
    {

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('GalleryTable');
    }
}
