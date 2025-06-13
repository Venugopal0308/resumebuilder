const express = require("express");
const router = express.Router(); // ✅ Use Express Router
const resumeController = require("../controllers/resumeController");

router.post("/suggestions", resumeController.getSuggestions); // ✅ pass function

module.exports = router;
