const router = require('express').Router();
const User = require('../models/User');
const RefreshToken = require("../models/RefreshToken");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation')
const { verifyAuthToken } = require('./verifyToken');

function generateAuthToken(userId) {
  return jwt.sign({ id: userId }, process.env.TOKEN_SECRET, {
    expiresIn: '24h'
  })
}

router.get("/", (req, res) => {
  res.send("its working...")
})

//Register route
router.post("/register", async (req, res) => {
  const validation = registerValidation(req.body);
  if (validation.error) {
    return res.json({
      message: validation.error.details[0].message
    })
  }

  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "Email already exists" })
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const newUser = new User({ name, email, password: passwordHash });
  await newUser.save();

  return res.json({ success: true, user: newUser._id });
})

//Login route
router.post('/login', async (req, res) => {
  const validation = loginValidation(req.body);

  if (validation.error) {
    return res.json({ message: validation.error.details[0].message })
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email })
  if (!user) {
    return res.json({ message: "Email not found" })
  }
  const password_correct = await bcrypt.compare(password, user.password);

  if (!password_correct) {
    res.json({ message: "Password is wrong" })
  }

  const authToken = generateAuthToken(user._id);
  res.set("auth-token", authToken);

  return res.json({
    "success": true,
    'authToken': authToken,
    'user': user.name,
    'role': user.role,
  })

})

// logout
router.delete('/logout', verifyAuthToken, async (req, res) => {
  await RefreshToken.findOneAndDelete({ token })

  res.removeHeader('auth-token')
  res.json({
    success: true,
    token_id: token,
    message: 'SuccessFully logged out'
  })
})

// get User details
router.get('/me', verifyAuthToken, async (req, res) => {
  const { id } = req.jwt_data;
  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(429).json({ message: "Access Denied" })
    }
    return res.json(user);
  } catch {
    return res.sendStatus(500);
  }
})

module.exports = router;