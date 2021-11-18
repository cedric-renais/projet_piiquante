//----------------//
// Import Express //
//----------------//
const express = require('express');
//-------------//
// Import path //
//-------------//
const path = require('path');
//----------------//
// Import routers //
//----------------//
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
//-----------------//
// Calling express //
//-----------------//
const app = express();
//---------------------//
// Import Mongoose     //
// Connect to DataBase //
//---------------------//
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://admin:Chapiteau01@cluster0.wbkwd.mongodb.net/hotTakes?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Successful connection to MongoDB Atlas.'))
  .catch(() => console.log('Connection to MongoDB Atlas failed.'));
//---------------------------------------------------------------------//
//                               CORS                                  //
//---------------------------------------------------------------------//
// Allows access to the API from any source                            //
// Allows you to add the mentioned headers to requests sent to the API //
// Allows you to send requests with the methods mentioned              //
//---------------------------------------------------------------------//
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
//---------------------------------//
// Transform the request into json //
//---------------------------------//
app.use(express.json());
//----------------//
// Calling routes //
//----------------//
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
//-------------//
// Exports app //
//-------------//
module.exports = app;
