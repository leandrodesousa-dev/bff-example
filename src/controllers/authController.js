const { registerUser, authenticateUser } = require('../services/authService');

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    await registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { token, mfaRequired } = await authenticateUser(username, password);
    res.json({ token, mfaRequired });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { register, login };
