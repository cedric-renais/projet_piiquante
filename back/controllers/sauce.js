//--------------//
// Import model //
//--------------//
const Sauce = require('../models/sauce');
//-------------------------------------//
// Exports the logic of the POST route //
//-------------------------------------//
exports.createSauce = (req, res, next) => {
  const sauce = new Sauce({
    ...req.body, // Spread syntax
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: 'Saved sauce.' }))
    .catch((error) => res.status(400).json({ error }));
};
//-------------------------------------//
// Exports the logic of the GET route  //
//-------------------------------------//
exports.readSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};
//-------------------------------------//
// Exports the logic of the PUT route //
//-------------------------------------//
exports.updateSauce = (req, res, next) => {
  Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified sauce.' }))
    .catch((error) => res.status(400).json({ error }));
};
//---------------------------------------//
// Exports the logic of the DELETE route //
//---------------------------------------//
exports.deleteSauce = (req, res, next) => {
  Sauce.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted sauce.' }))
    .catch((error) => res.status(400).json({ error }));
};
//-----------------------------------------------//
// Exports the logic of the GET all sauces route //
//-----------------------------------------------//
exports.readAllSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};
