const express = require('express');
const { getQRCode } = require('../controllers/qrCodeController');
const router = express.Router();

router.get('/qrcode/:username', getQRCode);

module.exports = router;
