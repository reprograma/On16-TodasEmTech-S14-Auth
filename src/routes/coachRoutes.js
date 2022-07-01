const controller = require("../controller/coachController");
const express = require("express");
const router = express.Router();

router.post("/coach", controller.createCoach);
router.get("/coaches", controller.findAllCoaches);
router.get("/coaches/:id", controller.findCoachById);
router.patch("/coach/:id", controller.updateCoach);
router.delete("/coach/:id", controller.deleteCoach);

module.exports = router;
