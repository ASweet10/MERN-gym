const express = require("express")
const { signupUser, loginUser } = require("../controllers/userController")

const router = express.Router()

router.post('/login', loginUser)    // Login Route; POST because sending data to server

router.post('/signup', signupUser)    // Signup Route

module.exports = router