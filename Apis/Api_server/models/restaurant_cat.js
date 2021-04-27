var mongoose = require('mongoose');
var restaurant_catSchema = new mongoose.Schema({
    cat_name: {
            type: String,
            required: true,
            min: 3
        },
      
    });
    mongoose.model('restaurant_cat', restaurant_catSchema, 'restaurant_cat');
    