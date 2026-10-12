const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async function requireUser(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const [scheme, token] = header.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        success: false,
        message: "Please log in to access this resource."
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.isActive === false) {
      return res.status(401).json({
        success: false,
        message: "Your account is unavailable."
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired login session."
    });
  }
};
