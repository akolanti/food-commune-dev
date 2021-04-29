var express = require('express');
var router = express.Router();

const ctrlLogin=require("../controllers/login");
const ctrlMain=require("../controllers/main");
const ctrlChat= require("../controllers/chat");

/* GET home page. */
router.post('/login', ctrlLogin.login);
router.post('/register', ctrlMain.register);
router.get('/restaurant_list', ctrlMain.get_restaurant_list);
router.get('/get_restaurant/:res_id', ctrlMain.get_restaurant);
router.get('/get_single_res/:res_id', ctrlMain.get_single_res);
router.post('/chat',ctrlChat.chat_token);

// // function verifyToken(req,res,next)
// // {
// //     const bearerheader=req.headers['authorization'];
// //     if(typeof bearerheader!=='undefined')
// //     {
// //        const bearer=bearerheader.split(' ');
// //        const btoken=bearer[1];
   
// //        req.token=btoken;
// //        jwt.verify(req.token,'12345',(err,authdata)=>{
// //            if(err)
// //            {
// //                res.sendStatus(403);
   
// //            }
// //            else{
// //                 res.json({data:authdata});
               
                
// //            }
// //        });
// //     }else
// //     {
// //         res.sendStatus(403);
// //     } 
       
     
// }
module.exports = router;
