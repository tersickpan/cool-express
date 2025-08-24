const express = require("express");
const router = express.Router();
const signature = require("../modules/signuploadform");

// using this API should require authentication
router.get("/", function (req, res, next) {
  const sig = signature.signuploadform();
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
  });
});

module.exports = router;
