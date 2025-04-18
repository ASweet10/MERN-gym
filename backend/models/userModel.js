const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

//Mongoose will only allow new documents to be saved that adhere to this schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true // Must not already exist
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function(email, password) {

    // Validation
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)) {
        throw Error('Please enter a valid email')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email }) // This: model currently being created
    if(exists) {
        throw Error('Email already in use!')
    }

    //Salt is string of random characters added to password before it's hashed
    // Extra layer of security
    //  -Argument is cost of salt, higher value = more security but more wait for users
    const salt = await bcrypt.genSalt(10) // Salt: random characters added to password before it's hashed; Argument cost Higher value = more security but longer wait

    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

// Static login method
userSchema.statics.login = async function (email, password) {

    if(!email || !password) {
        throw Error('All fields must be filled')
    }

    // "This" refers to model currently being created
    const user = await this.findOne({ email })
    if(!user) {
        throw Error("Email doesn't exist!")
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error("Password doesn't match!")
    }

    return user
}
module.exports = mongoose.model('User', userSchema)