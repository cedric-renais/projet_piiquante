//----------------//
// Import Express //
// Calling app    //
//----------------//
const express = require('express');
const app = express();
//---------------------//
// Import Mongoose     //
// Connect to DataBase //
//---------------------//
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://admin:Chapiteau01@cluster0.wbkwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB Atlas réussie !'))
  .catch(() => console.log('Connexion à MongoDB Atlas échouée !'));
// Middlewares //
//-------------//
app.use(express.json());
//------------//
// Export app //
//------------//
module.exports = app;
