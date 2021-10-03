const express = require("express");
const router = express.Router();

const csvProcessControllers = require("../controllers/csvProcess")

router.post("/", csvProcessControllers.uploadFields, csvProcessControllers.csvProcess)

module.exports = router;;