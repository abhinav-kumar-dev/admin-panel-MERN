const express = require("express");
const authController = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/getUser").get(authMiddleware, authController.getUser);

module.exports = router;