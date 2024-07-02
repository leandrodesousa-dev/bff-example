const express = require('express');
const { getMenuContent, 
getUserData,
getSettings,
getOrders,
getProductList,
getNotifications} = require('../controllers/contentController');
const authMiddleware = require('../middlewares/authMiddleware');
const mfaMiddleware = require('../middlewares/mfaMiddleware');

const router = express.Router();

router.get('/menu-screen-content', authMiddleware, getMenuContent);
router.get('/user-data', authMiddleware, mfaMiddleware, getUserData);
router.get('/settings', authMiddleware, mfaMiddleware, getSettings);
router.get('/orders', authMiddleware, mfaMiddleware, getOrders);
router.get('/product-list', authMiddleware, mfaMiddleware, getProductList);
router.get('/notifications', authMiddleware, mfaMiddleware, getNotifications);

module.exports = router;
