const jwt = require('jsonwebtoken');

//! middle-wares
function verifyAuthToken(req, res, next) {
  const token = req.headers['auth-token'];
  if (token === undefined) {
    return res.status(401).json({ message: 'Access denied' });
  }
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    req.jwt_data = data;
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports.verifyAuthToken = verifyAuthToken;
