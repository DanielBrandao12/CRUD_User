const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth")

router.get("/", controller.getUsers)

router.get("/:id", controller.getUserById)

router.post("/", controller.createUser);

router.put("/:id",authMiddleware.verifyToken, controller.updateUser)

router.delete("/:id",authMiddleware.verifyToken, controller.deleteUser)

router.post('/login', controller.login)

module.exports = router;