var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
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
mongoose.model('users', userSchema, 'users');
