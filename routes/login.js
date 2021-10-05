const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login")

router.post("/", loginController.login);
router.post("/verify", loginController.verify);

module.exports = router;