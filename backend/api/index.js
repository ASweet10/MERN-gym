const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env')})

const express = require('express')
const mongoose = require("mongoose")
const blogRoutes = require('../routes/blogs')
const userRoutes = require('../routes/user')

const app = express() // Express app

// Express Middleware
app.use(express.json()) // Checks incoming requests

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/blog', blogRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGDB_URI)
    // Once connected to database...
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening on port ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })