const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader === 'Bearer your-secret-token') {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;
  