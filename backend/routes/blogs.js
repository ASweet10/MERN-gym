const express = require("express")
const {
    getBlog, getBlogs, createBlog, updateBlog, deleteBlog
} = require('../controllers/blogController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router() //Get access to express router

router.use(requireAuth) // Make sure user authenticated before getBlogs etc. can be accessed

router.get('/', getBlogs)  // GET all blogs (.../api/blog/)
router.get('/:id', getBlog)  // GET single blog
router.post('/', createBlog)  // POST a new blog
router.delete('/:id', deleteBlog)  // DELETE a blog
router.patch('/:id', updateBlog)  // UPDATE a blog

module.exports = router