const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async function requireAdmin(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const [scheme, token] = header.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required."
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.isActive === false) {
      return res.status(401).json({
        success: false,
        message: "Account not found or inactive."
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Administrator access required."
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token."
    });
  }
};
