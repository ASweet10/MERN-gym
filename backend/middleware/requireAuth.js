const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async ( req, res, next ) => {

    const { authorization } = req.headers  //Verify authentication

    if ( !authorization ) {
        return res.status(401).json({error: "Authorization token required"})
    }

    //Split token, which looks like 'Bearer dadfaerejkl.asldkfjasdf.jiopupoij'
    //Becomes 2 elements of array, split around space
    //Use second element, the token string

    const token = authorization.split(' ')[1]

    try{
        const { _id} = jwt.verify( token, process.env.SECRET ) // Successful; grab id from token
        req.user = await User.findOne({ _id }).select('_id') // Try to find user in db with _id property

        next() // Next: go to next function; i.e. workouts.js route functions

    } catch (error){
        console.log(error)
        res.status(401).json({error: "REQUEST IS NOT AUTHORIZED"})
    }
}

module.exports = requireAuth