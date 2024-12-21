const express = require('express')
const { createBlogPost, getAllBlogs, getSpecificBlog, updateBlog, deleteBlog } = require('../controllers/blogControllers')

const route = express.Router()


//create route
route.post('/createpost', createBlogPost)

//read all blogs
route.get("/getallblogs", getAllBlogs)

//read specific blog
route.get('/getspecific/:id', getSpecificBlog)

//update blog
route.post('/updateblog/:id', updateBlog)

//delete blog
route.delete('/deleteblog/:id', deleteBlog)

module.exports = route