
var mongoose = require('mongoose');
var restaurant_listSchema= new mongoose.Schema({
    rse_name: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        },
        latitude: {
            type: String,
            required: true,
            
        },
        longitude: {
            type: String,
            required: true,
            
        },
        address: {
            type: String,
            required: true,
            
        },
        res_img: {
            type: String,
            required: true,
            
        },

       
       
      
    });
    mongoose.model('restaurant_list', restaurant_listSchema, 'restaurant_list');
    