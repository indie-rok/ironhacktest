const { User } = require("../models/user.model");

module.exports = async function(req, res, next) {
  const accessToken =
    req.headers["x-access-token"] || req.headers["authorization"];

  if (!accessToken)
    return res.status(401).send({ msg: "Access denied. No token provided." });

  const user = await User.findOne({
    accessToken
  });

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(400).send({ msg: "Invalid token" });
  }
};
