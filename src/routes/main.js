const express = require("express");
const router = express.Router();

const {index, contact } = require("../controllers/mainController");


router.get("/", index);
router.get("/contact", contact);

module.exports = router;


