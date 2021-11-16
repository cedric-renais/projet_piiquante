//----------------//
// Import express //
// Create router  //
//----------------//
const express = require('express');
const router = express.Router();
//-------------------//
// Import controller //
//-------------------//
const userCtrl = require('../controllers/user');
//---------------//
// Create routes //
//---------------//
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
//---------------//
// Export router //
//---------------//
module.exports = router;
