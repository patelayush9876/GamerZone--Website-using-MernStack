const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup route
router.post('/signup', async (request, response) => {
    try {
        const exist = await User.findOne({ email: request.body.email });
        if (exist) {
            return response.status(401).json({ message: "Email Already Exists" });
        }

        const user = new User(request.body);
        await user.save();

        return response.status(200).json({ message: "User created successfully", user });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: error.message });
    }
    
});

// Login route
router.post('/login', async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;

        let data = await User.findOne({email: email, password: password});

        if(data) {
            return response.status(200).json(data);
        }
        else {
            return response.status(401).json("Invalid Login");
        }
    } catch (error) {
        response.status(500).json({ message: error.message});
    }
});

// Add data route (protected route)
router.post('/add', verifyToken, async (req, res) => {
  const { data } = req.body;
  try {
    // Process the data as per your requirement
    res.status(201).json({ message: 'Data added successfully', data });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// JWT verification middleware
function verifyToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

module.exports = router;
