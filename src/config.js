require("dotenv/config");

module.exports = {
  port: process.env.PORT,
  secret: process.env.JWT_SECRET,
};
