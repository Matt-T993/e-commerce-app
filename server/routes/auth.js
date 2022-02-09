const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username });
  console.log("User:", user);
  if (!username || !password) {
    return response
      .status(400)
      .json({ message: "Not all fields have been entered" });
  }

  if (!user) {
    return response.status(401).json({ error: "invalid username or password" });
  }
  if (user && (await user.comparePassword(password))) {
    console.log("Corrected Password!!");
    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    response.status(200).send({ token, username: user.username });
  } else {
    return response
      .status(401)
      .json({ error: "username and password is invalid" });
  }
});

// register user
router.post("/register", async (request, response) => {
  try {
    const { username, email, password, confirmPassword } = request.body;
    //check if all details have been entered
    if (!username || !email || !password || !confirmPassword) {
      return response
        .status(400)
        .json({ message: "Please enter all the details" });
    }
    //check if password are the same
    if (password !== confirmPassword) {
      return response
        .status(400)
        .json({ message: "Please enter the same password" });
    }
    // checking if the username exists in the DB
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return response.status(400).json({ message: "Username already exists" });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: request.body.username,
      email: request.body.email,
      password: hashPassword,
    });

    const savedUser = await newUser.save();
    response.json(savedUser);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = router;
