const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const User = require('../models/userModel');

const getQRCode = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const otpauthUrl = speakeasy.otpauthURL({
        secret: user.mfaSecret,
        label: username,
        issuer: 'bff-example',
        encoding: 'base32',
      });

    QRCode.toDataURL(otpauthUrl, (err, dataUrl) => {
      if (err) {
        return res.status(500).json({ error: 'Error generating QR code' });
      }

      res.status(200).json({
        message: 'User registered successfully',
        qrCodeUrl: otpauthUrl,
        qrCodeImage: dataUrl,
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getQRCode };
