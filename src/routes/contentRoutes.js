const express = require('express');
const { getMenuContent, 
getUserData,
getSettings,
getOrders,
getProductList,
getNotifications} = require('../controllers/contentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/menu-screen-content', authMiddleware, getMenuContent);
router.get('/user-data', authMiddleware, getUserData);
router.get('/settings', authMiddleware, getSettings);
router.get('/orders', authMiddleware, getOrders);
router.get('/product-list', authMiddleware, getProductList);
router.get('/notifications', authMiddleware, getNotifications);

module.exports = router;
