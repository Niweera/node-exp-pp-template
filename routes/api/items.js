const express = require("express");
const router = express.Router();
const passport = require("passport");

/*main routes includes
main routes includes*/

// Load Item model
const Item = require("../../models/Item");

// @route   GET /route
// @desc    Description
// @access  Protected
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Your API logic here.
  }
);

// @route   GET /route
// @desc    Description
// @access  Protected
router.get(
  "/route",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Your API logic here
  }
);

// @route   GET /*
// @desc    Return 404 for all unidentified routes
// @access  Public
const fourNaughtFour = {
  message: "Authorization required."
};
router.get("*", function(req, res) {
  res.status(404).json(fourNaughtFour);
});

module.exports = router;
