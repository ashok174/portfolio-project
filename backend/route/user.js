const express = require("express");
const router = express.Router();

const userControllers = require("../controller/user");

router.get("/show", userControllers.show);
router.get("/index", userControllers.index);
router.post("/store", userControllers.store);

module.exports = router;
