module.exports = function(){
  var knex = require('knex')({
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'cant_stop_wont_stop',
    password : 'top_notch',
    database : 'five_star_party'
    }
  });


/**
* Tables
* @TODO: Create Unique indexes
*/


  knex.schema.createTable("service_providers", function(table) {
    
    table.increments('service_provider_id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('username');
    table.json('inventory');
    table.timestamps()
    table.foreign('reviews').references('reviews.review_id');
    table.foreign('appointments').references('appointments.appointment_id');
    table.foreign('photos').references('photos.photo_id');
    table.foreign('receipts').references('receipts.receipt_id');
    table.foreign('services').references('services.service_id');
    table.foreign('promotions').references('promotions.promotion_id');


  });

  knex.schema.createTable("services", function(table) {
    
    table.increments('service_id').primary();
    table.string('name');
    table.string('description');
    table.integer('price_($)');
    table.timestamps();
    table.foreign('photo').references('photos.photo_id');
    table.foreign('service_provider').references('service_providers.service_provider_id');


  });

  knex.schema.createTable("clients", function(table) {
    
    table.increments('client_id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('username');
    table.timestamps();
    table.foreign('appointments').references('appointments.appointment_id');
    table.foreign('photos').references('photos.photo_id');

  });

  knex.schema.createTable("appointments", function(table) {
    
    table.increments('appointment_id').primary();
    table.integer('approximate_duration_(mins)');
    table.dateTime('time');
    table.timestamps();
    table.foreign('service_provider').references('service_providers.service_provider_id');
    table.foreign('client').references('clients.client_id');
    table.foreign('service').references('services.service_id');


  });

  knex.schema.createTable("photos", function(table) {
    
    table.increments('photo_id').primary();
    table.string('base_64');
    table.string('photo_url');
    table.timestamps();
    table.foreign('client').references('clients.client_id');
    table.foreign('service_provider').references('service_providers.service_provider_id');

  });

  knex.schema.createTable("receipts", function(table) {
    
    table.increments('receipt_id').primary();
    table.string('base_64');
    table.string('expenditure_name');
    table.integer('value_($)');
    table.timestamps();
    table.foreign('service_provider').references('service_providers.service_provider_id');

  });

  knex.schema.createTable("promotions", function(table) {
    
    table.increments('promotion_id').primary();
    table.foreign('photo').references('photos.photo_id');
    table.foreign('services').references('services.service_id');
    table.foreign('service_provider').references('service_provider_id');
    table.timestamps();


  });

  knex.schema.createTable("reviews", function(table) {
    
    table.increments('review_id').primary();
    table.string('comment');
    table.integer('stars');
    table.json('tags')
    table.foreign('service_provider').references('service_providers.service_provider_id')
    table.foreign('service').references('services.service_id')
    table.foreign('client').references('clients.client_id')
  });



 /**
 * Lets Generate some data!
 */


var first_names = ['Chris', 'Bradley', 'Fox', 'Hunter', 'Jason', 'Wolf', 'Marko', 'Chalupa', 'Bearded', 'Abominable', 'Cruze', 'Wayne', 'Kanye'],
    last_names = ['Brooks', 'Jackson', 'Santiago', 'Basdeo', 'Cavallero', 'Trowbridge', 'Simkins', B'Blackwell', 'Desperado', 'Vandal', 'Savage', 'Gunn', 'Fencer'],
    service_names = ['Chef', 'DJ', 'Fire Dancer', ]
    usernames = ['Yung_WildNFree', 'Big_cheese_Homie', 'NoSwagSinatra', 'CallMeBird', 'Passion_con_carne', 'LoveLostInQueso', 'sleepy_Django', 'unbrokenGlass', 'T-Wayne', 'DaFishesSleepWitMe', 'UnderRated_OverPowered', 'Angry4RlyNoReason', 'That1Guy', 'Hanglider_homie', 'Super_duper_salty', 'BetterThanTheRest', 'peacel0ve'],
    review_comments = ['awesome', 'really enjoyable', 'would never again', 'kinda iffy', 'Meh, Take it or leave it'],
    service_descriptions = "This is really just as good as it gets. I mean, come on, look at this service. When you were a little kid and you thought 'I wanna throw the gnarlyest parties of all time when I grow up!'? Well I just made that possible for you, with this... ",
    expenditure_name =

function generateServiceProviders(){
  return {

  }
}

function generate(){
  
}

function generate(){
  
}

function generate(){
  
}

function generate(){
  
}

function generate(){
  
}

function generate(){
  
}

function generate(){
  
}

function generate(){
  
}


}