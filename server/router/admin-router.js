const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router.route("/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserWithId);
router.route("/getuser/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route("/updateuser/:id").put(authMiddleware, adminMiddleware, adminController.updateUser);
router.route("/contact/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContactById);


module.exports = router;