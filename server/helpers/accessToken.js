const hash = require("object-hash");

module.exports = function generate(user) {
  return hash(user);
};
