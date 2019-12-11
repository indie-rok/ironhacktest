const auth = require("../middleware/auth");
const { User, validate } = require("../models/user.model");
const express = require("express");
const generate = require("../helpers/accessToken");
const router = express.Router();

router.get("/user/current", auth, async (req, res) => {
  res.send(req.user);
});

router.get("/user", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (user) {
    return res.send({ accessToken: user.accessToken });
  } else {
    return res
      .status(400)
      .send({ msg: "No user found with provided credentials" });
  }
});

router.post("/user", async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ msg: error.details[0].message });

  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send({ msg: "User already registered." });

  const accessToken = generate({
    email: req.body.email,
    password: req.body.password
  });

  user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    accessToken
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    accessToken: user.accessToken
  });
});

module.exports = router;
