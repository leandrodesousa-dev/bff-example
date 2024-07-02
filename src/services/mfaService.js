const speakeasy = require('speakeasy');

const generateMfaSecret = () => {
  return speakeasy.generateSecret();
};

const verifyMfaToken = (secret, token) => {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
  });
};

module.exports = { generateMfaSecret, verifyMfaToken };
