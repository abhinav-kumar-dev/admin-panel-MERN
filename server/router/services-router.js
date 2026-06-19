const express = require("express");
const servisesController = require("../controllers/services-controller");

const router = express.Router();

router.route("/services").get(servisesController);

module.exports = router;