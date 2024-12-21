const mongoose=require('mongoose')

const Blog=mongoose.Schema({
    title: {
    type: String,
    required: true,
    trim: true, 
  },
  content: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    default: "", 
  },
  author: {
    type: String,
    required: true,
    trim: true,
  }
})

const BlogModel=mongoose.model('Blog',Blog)

module.exports=BlogModel