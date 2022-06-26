const controller = require("../controller/usersController");
const express = require("express");
const router = express.Router();

router.post("/users/", controller.create);
router.get("/users/", controller.getAll);
router.delete("/users/:id", controller.deleteById);
router.post("/users/login", controller.login);

module.exports = router;
