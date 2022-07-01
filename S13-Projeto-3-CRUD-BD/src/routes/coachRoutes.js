const controller = require("../controller/coachController.js");
const express = require("express");

const router = express.Router();

router.post("/coach", controller.createCoach);
router.get("/coaches", controller.findAllCoaches)
router.patch("/coach/:id", controller.updateCoach)
router.delete("/coach/:id", controller.deleteCoach)
router.get("/coach/:id", controller.findCoachById)

module.exports = router;