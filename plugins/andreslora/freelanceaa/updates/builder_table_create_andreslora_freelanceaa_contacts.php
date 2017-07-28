<?php namespace AndresLora\Freelanceaa\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAndresloraFreelanceaaContacts extends Migration
{
    public function up()
    {
        Schema::create('andreslora_freelanceaa_contacts', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('name');
            $table->text('email');
            $table->text('message');
            $table->text('status');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('andreslora_freelanceaa_contacts');
    }
}
