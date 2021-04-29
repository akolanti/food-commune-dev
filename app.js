var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./api_server/models/db');
var Stream =require('stream-chat')

const indexRouter = require('./App_server/routes/index');
var usersRouter = require('./App_server/routes/users');
var apiRoutes = require('./Api_server/routes/index');
var routes = require('./app_server/routes/index');const cors = require("cors");
const stripe = require("stripe")("sk_test_51IgvT7FowvHTDhySVC2loicz9pLaE5ZJYqZW5pKb5wCVX433eLKQOsfZKDin9ZHgMVQ1NUWx2rGH5k116co65Prt00q9ziYd5k");
const uuid = require("uuid");
const {
  token
} = require('morgan');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, './app_server/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  next();
})
app.use(cors());
app.use('/', routes);
app.use('/api', apiRoutes);
// app.use('/', indexRouter);
app.use('/users', usersRouter);

//chat stream
// const StreamChat = require('stream-chat').StreamChat; 
//   const chatClient = StreamChat.getInstance('ms753b275zwm');
//   const client = new StreamChat('ms753b275zwm', 'z4c5cts7jtsjnh25bxxn7tmefarcfxys6wwuu3am943mb6fqzm46vsyyj6edavfr'); 
  


// stripe checkout
app.post('/api/checkout', async (req, res) => {
  console.log("The request to stripe", req.body);

  let error;
  let status;
  let receipt_url;
try {
  const {
    product,
    token
  } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id
  });

  const idempotencyKey = uuid();
  const charge = await stripe.charges.create({
    amount: product.price,
    currency: "cad",
    customer: customer.id,
    receipt_email: token.email,
    shipping: {
      name: token.card.name,
      address: {
        line1: token.card.address_line1,
        line2: token.card.address_line2,
        city: token.card.address_city,
        country: token.card.address_country,
        postal_code: token.card.address_zip
      }
    }
  }, {
    idempotencyKey
  });
  console.log("charge: ", {
    charge});

  status = "success";
  receipt_url= charge.receipt_url;
  }catch(error){console.log("error");
  status="failure";
  }
  res.json({error,status,receipt_url});
})



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//chat api 

// app.get('/api/chat', function() {
//   const chat_token = client.createToken('user');
//   console.log(chat_token);

//   res.send("hello")
// });


module.exports = app;