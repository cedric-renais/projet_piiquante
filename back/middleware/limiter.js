//---------------------------//
// Import express-rate-limit //
//---------------------------//
const expressRateLimit = require('express-rate-limit');
//-----------------------//
// Limiter configuration //
//-----------------------//
const loginLimiter = expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50,
});
//-------------------------------//
// Exports limiter configuration //
//-------------------------------//
module.exports = { loginLimiter };
