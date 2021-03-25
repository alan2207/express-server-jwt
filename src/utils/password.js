const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = async (plainPassword) => {
  const hash = await bcrypt.hash(String(plainPassword), saltRounds);

  return hash;
};

const comparePasswords = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(String(plainPassword), hashedPassword);

  return isMatch;
};

module.exports = {
  hashPassword,
  comparePasswords,
};
