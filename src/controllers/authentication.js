var jwt = require("jsonwebtoken");

const { secret } = require("../config");
const db = require("../db");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user.id, iat: timestamp }, secret);
}

exports.signin = function (req, res) {
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "Email and password must be provided" });
  }

  const existingUser = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res.status(422).send({ error: "Email is aleready in use..." });
  }

  const user = await db.user.create({
    data: {
      email,
      password,
    },
  });

  return res.json({ token: tokenForUser(user) });
};
