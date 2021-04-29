var mongoose =require('mongoose');
var dbURI='mongodb+srv://auditionHere:Ami12895@cluster0.xkvkn.mongodb.net/Restaurant?retryWrites=true&w=majority';
mongoose.connect(dbURI);

mongoose.connection.on('connected',function(){
console.log("mongoose connected to Database")
});     
mongoose.connection.on('error',function(){
    console.log("mongoose connection error")
});
mongoose.connection.on('disconnected',function(){
    console.log("mongoose disconnected ")
});

require('./users');
require('./restaurant_list');
require('./restaurant_cat');
require('./items');

