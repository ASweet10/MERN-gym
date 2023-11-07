const Blog = require("../models/blogModel")
const mongoose = require("mongoose")

const getBlogs = async (req, res) => {     // Get all blogs
    // Sort so newest are at top
    // const user_id = req.user._id
    //const blogs = await Blog.find({ user_id }).sort({createdAt: -1}) // Only find blogs with user's ID; Not currently used
    const blogs = await Blog.find()

    res.status(200).json(blogs)
}

const getBlog = async (req, res) => {       // Get single blog
    const { id } = req.params // Get ID property from route

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such blog ID"})
    }

    const blog = await Blog.findById(id)

    if (!blog) {
        return res.status(404).json({error: "blog not found"})
    }
    res.status(200).json(blog)
}

const createBlog = async (req, res) => {        // Create new blog
    const {title, content, src, date} = req.body

    let emptyFields = []
    if(!title) {
        emptyFields.push('title')
    }
    if(!content) {
        emptyFields.push('content')
    }
    if(!src) {
        emptyFields.push('src')
    }
    if(!date) {
        emptyFields.push('date')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        const user_id = req.user._id
        const blog = await Blog.create({title, content, src, date})     // Store (Workout.create) response in blog; Create mongo document

        res.status(200).json(blog) // Send json object
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log({error: error.message})
    }
}

const deleteBlog = async (req, res) => {      // DELETE a blog
    const { id } = req.params  // Get ID property from route

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such blog ID"})
    }

    const blog = await Blog.findOneAndDelete({_id: id})

    if (!blog) {
        return res.status(404).json({error: "blog not found"}) // If not found
    }

    res.status(200).json(blog)
}

const updateBlog = async (req, res) => {   // UPDATE a blog
    const { id } = req.params // Get ID property from route

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such blog ID"})
    }

    const blog = await Blog.findOneAndUpdate({_id: id}, {
        //Could also pass / update a single property, i.e. title: 'abc'
        ...req.body
    })
}

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
}