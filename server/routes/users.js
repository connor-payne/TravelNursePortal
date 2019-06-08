// const auth = require("../controllers/auth");
// const admin = require("../controllers/admin");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

// Get Users


// Create User
router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["firstname","lastname", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();

  // use lodash (for utility functions) -> _.pick(user, ['name', 'email'])
  // set response  header with token
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["name", "email"]));
});

module.exports = router;
