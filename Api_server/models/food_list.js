var mongoose = require('mongoose');
var foodlistSchema = new mongoose.Schema({
    Name: {
            type: String,
            required: true,
            min: 3
        },
        Email: {
            type: String,
            required: true,
            min: 3
        },
        Password: {
            type: String,
            required: true,
            
        },
       
       
      
    });
    mongoose.model('foodlist', foodlistSchema, 'foodlist');
    