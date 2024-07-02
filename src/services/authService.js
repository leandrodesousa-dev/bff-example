const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { generateMfaSecret } = require('./mfaService');

const registerUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const mfaSecret = generateMfaSecret().base32;

  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      mfaSecret
    });
    return user;
  } catch (error) {
    throw new Error('Username already exists');
  }
};

const authenticateUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });
  return { token, mfaRequired: !!user.mfaSecret };
};

module.exports = { registerUser, authenticateUser };
