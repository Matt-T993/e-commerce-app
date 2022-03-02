const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });
  console.log("User:", user);
  if (!email || !password) {
    return response
      .status(400)
      .json({ message: "Not all fields have been entered" });
  }

  if (!user) {
    return response.status(401).json({ error: "invalid email or password" });
  }
  if (user && (await user.comparePassword(password))) {
    console.log("Corrected Password!!");
    const userForToken = {
      id: user._id,
      isAdmin: user.isAdmin,
    };

    const token = jwt.sign(userForToken, process.env.JWT_SEC, {
      expiresIn: "2d",
    });

    response.status(200).send({ token, email: user.email });
  } else {
    return response
      .status(401)
      .json({ error: "email and password is invalid" });
  }
});

// register user
router.post("/register", async (request, response) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } =
      request.body;
    //check if all details have been entered
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
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
    // checking if the email exists in the DB
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return response.status(400).json({ message: "Email already exists" });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
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
