var express = require("express");
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/devices/:uid", function(req, res) {
  res.send("this will fetch a device by uid");
});

router.get("/devices", function(req, res) {
  res.send("this will fetch all devices");
});

module.exports = router;
