const express = require('express');
const router = express.Router();
const {signup,login} = require('../controllers/AuthController');
// const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
router.post('/signup',signup);
router.post('/login',login);

// router.get('/protected', authMiddleware, (req, res) => {
//     res.status(200).json({ message: 'This is a protected route' });
//   });

module.exports = router;
