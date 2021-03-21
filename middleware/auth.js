const jwt = require('jsonwebtoken');
const config = require('config');
const { reset } = require('nodemon');
module.exports = function (req, res, next) {
  // get token from header
  const token = req.header('x-auth-token');
  //check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token , authorization denied' });
  }
  try {
      //
    const decoded = jwt.verify(token, config.get('jwtToken'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'token no valid' });
  }
};
