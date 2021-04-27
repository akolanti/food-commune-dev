
const mongoose = require('mongoose');
const users = mongoose.model('users');
// const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const token = '';
const saltRounds = 10;
// const jwt=require('jsonwebtoken');
// const token = '';
// const saltRounds = 10;

const login =  function(req,res,next)
{
    
    users.findOne({Email:req.body.userName})
    .exec(function(err, UserData) {
    if (!UserData) {
        res 
        .status(202)
        .json({"message":"data not found", data:null});
    return;
    } 
    else if (err) {
        res
        .status(404)
        .json(err);
        return;
        }
        else{

           if(UserData.Password==req.body.password)
           {
            this.token=jwt.sign({_id:UserData._id},"12345");
            res.status(200).json({status:"success","data":UserData,"token":this.token});
           }
           else{
            res.json({status:"error", message: "Invalid email/password!!!", data:null});
           }
           

        }
    });
  
};


module.exports=
{
    login
};