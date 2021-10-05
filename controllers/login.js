const utils = require("./utils");
const upload = utils.upload();
const uploadFields = upload.fields();
const jwt = require("jsonwebtoken");
require("dotenv/config");

const User = require("../models/user");

const login = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    console.log(user);
    if (user.length > 0 && user[0].password === req.body.password) {
      const token = jwt.sign(
        {
          email: user[0].email,
          id: user[0].id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.json({
        message: "Auth successful",
        token: token,
      });
    } else {
      res.json({ message: "Неверные учетные данные " });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

const verify = async (req, res) => {
  try {
    if (req.body.token) {
      jwt.verify(req.body.token, process.env.JWT_KEY, (err, verifiedJwt) => {
        if (err) {
          res.json({ isAuthorised: false });
        } else {
          console.log(req.body);
          res.json({ isAuthorised: true });
        }
      });
    } else {
      res.end();
    }
  } catch (error) {
    res.json({ isAuthorised: false });
  }
};

module.exports = { login, uploadFields, verify };
