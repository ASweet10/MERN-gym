const User = require("../models/userModel")
const jwt = require("jsonwebtoken")


const createToken = (_id) => {   //_id property from MongoDB is part of payload for JSON web token
   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '24h' }) //Length user signed in for
}


const loginUser = async (req, res) => {     // LOGIN
    const { email, password } = req.body

    try{
        const user = await User.login(email, password)
        const token = createToken(user._id) // Create token (3 randomized strings; Header.Payload.Signature)

        res.status(200).json({ email, token })
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}


const signupUser = async (req, res) => {       // SIGNUP
    const { email, password } = req.body

    try{
        const user = await User.signup(email, password)
        const token = createToken(user._id) // Create token (3 randomized strings; Header.Payload.Signature)

        res.status(200).json({ email, token })
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

module.exports = { loginUser, signupUser }