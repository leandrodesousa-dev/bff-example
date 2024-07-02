const { verifyMfaToken } = require('../services/mfaService');

const mfaMiddleware = (req, res, next) => {
  const mfaToken = req.headers['x-mfa-token'];
  const { user } = req;

  if (!mfaToken || !verifyMfaToken(user.mfaSecret, mfaToken)) {
    return res.status(401).json({ message: 'Unauthorized - MFA Required' });
  }

  next();
};

module.exports = mfaMiddleware;
