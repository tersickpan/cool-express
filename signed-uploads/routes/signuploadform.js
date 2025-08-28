const express = require("express");
const router = express.Router();
const signature = require("../modules/signuploadform");

// using this API should require authentication
router.get("/", function (req, res, next) {
  const params = req.query;
  const sig = signature.signuploadform(params);
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
  });
});

module.exports = router;
