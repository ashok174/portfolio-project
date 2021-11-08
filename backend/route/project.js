const express = require("express");
const router = express.Router();

const projectControllers = require("../controller/project");

router.get("/index", projectControllers.index);
router.post("/store", projectControllers.store);

module.exports = router;
