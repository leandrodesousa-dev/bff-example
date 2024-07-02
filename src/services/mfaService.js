const speakeasy = require('speakeasy');

const generateMfaSecret = () => {
  return speakeasy.generateSecret();
};

const verifyMfaToken = (secret, mfaToken) => {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: mfaToken,
  });
};

module.exports = { generateMfaSecret, verifyMfaToken };
