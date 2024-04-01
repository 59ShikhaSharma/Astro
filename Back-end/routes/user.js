const express = require('express')
const {loginUser, signupUser} = require('../controllers/userController')
const router = express.Router();


//login-Route
router.post('https://astro-eosin-two.vercel.app/login', loginUser)


//SignUp-Route
router.post('https://astro-eosin-two.vercel.app/signup', signupUser)


module.exports = router;
