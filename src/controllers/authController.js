const login = (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.json({ token: 'your-secret-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { login };