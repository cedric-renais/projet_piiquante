//----------------//
// Import Express //
// Calling app    //
//----------------//
const express = require('express');
const app = express();
//----------------//
// Import routers //
//----------------//
const userRoutes = require('./routes/user');
//---------------------//
// Import Mongoose     //
// Connect to DataBase //
//---------------------//
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://admin:Chapiteau01@cluster0.wbkwd.mongodb.net/hotTakes?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Successful connection to MongoDB Atlas.'))
  .catch(() => console.log('Connection to MongoDB Atlas failed.'));
//-------------//
// Middlewares //
//-------------//
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
app.use(express.json());
app.use('/api/auth', userRoutes);
//------------//
// Export app //
//------------//
module.exports = app;
