const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(403).json({ error: "Token needed" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

exports.verifyAdmin = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: "Only admins can perform this action" });
    }
    next();
  });
};
