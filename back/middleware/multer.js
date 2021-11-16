//---------------//
// Import multer //
//---------------//
const multer = require('multer');
//------------//
// Dictionary //
//------------//
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'image/png': 'png',
};
//----------------------//
// Create config object //
//----------------------//
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'src');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split('').join('_');
    const extention = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extention);
  },
});
//---------------//
// Export multer //
//---------------//
module.exports = multer({ storage }).single('image');
