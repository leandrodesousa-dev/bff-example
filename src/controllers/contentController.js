const { readJSONFile } = require('../utils/jsonReader');

const getMenuContent = async (req, res) => {
  try {
    const data = await readJSONFile('menu-screen-content.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read file' });
  }
};

const getUserData = async (req, res) => {
  try {
    const data = await readJSONFile('user-data.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read file' });
  }
};

const getProductList = async (req, res) => {
  try {
    const data = await readJSONFile('product-list.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read file' });
  }
};

const getOrders = async (req, res) => {
  try {
    const data = await readJSONFile('orders.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read file' });
  }
};

const getNotifications = async (req, res) => {
  try {
    const data = await readJSONFile('notifications.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read file' });
  }
};

const getSettings = async (req, res) => {
  try {
    const data = await readJSONFile('settings.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read file' });
  }
};

module.exports = { getMenuContent, getUserData, getProductList, getOrders, getNotifications, getSettings };