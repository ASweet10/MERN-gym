const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Schema defines document structure
const blogSchema = new Schema ({
    title : { type: String, required: true },
    content: { type: String, required: true },
    src: { type: String, required: true },
    date: { type: Date, required: true },

}, {timestamps: true})

module.exports = mongoose.model("Blog", blogSchema)  // Model applies schema; Export module then call functions i.e. Blog.find()