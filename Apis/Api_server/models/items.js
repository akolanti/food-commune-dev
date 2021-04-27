var mongoose = require('mongoose');
var itemsSchema = new mongoose.Schema({
    cat_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'restaurant_cat',
            required: true,
        },
    res_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'restaurant_list',
            required: true,
           
        },
    item_name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
    });
    mongoose.model('items', itemsSchema, 'items');
    