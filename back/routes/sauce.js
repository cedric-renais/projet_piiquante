//----------------//
// Import express //
// Create router  //
//----------------//
const express = require('express');
const router = express.Router();
//-------------------//
// Import controller //
//-------------------//
const sauceCtrl = require('../controllers/sauce');
//--------//
//  CRUD  //
//--------//
// Create //
// Read   //
// Update //
// Delete //
//--------//
router.post('/', sauceCtrl.createSauce);
router.get('/:id', sauceCtrl.readSauce);
router.put('/:id', sauceCtrl.updateSauce);
router.delete('/:id', sauceCtrl.deleteSauce);
//----------------//
// Read all Sauces //
//----------------//
router.get('/', sauceCtrl.readAllSauces);
//---------------//
// Export router //
//---------------//
module.exports = router;
