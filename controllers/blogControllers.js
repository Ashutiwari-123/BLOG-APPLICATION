const BlogModel = require("../models/BlogSchema");
const generateSummary = require("../utils/generateSummary");


//create blog
const createBlogPost=async(req,res)=>{
    let blog=req.body
    const content=req.body.content

    const summary = await generateSummary(content);

    

    const newBlog=new BlogModel({...blog,summary:summary})

    try {
        await newBlog.save()
        res.status(201).send({message:"Blog created"})
    } catch (error) {
        res.status(400).send({message:"Error in Creating",error:error})
    }
}

//read all blog

const getAllBlogs=async(req,res)=>{
    try {
        const blogs=await BlogModel.find({})
        res.status(200).send({message:"fetching blogs",blogs:blogs})
    } catch (error) {
        res.status(402).send({message:"Error in reading all post",error})
    }
    
}

//read specific blog
const getSpecificBlog=async(req,res)=>{
    try {
        const id=req.params.id

        const blog=await BlogModel.findById({_id:id})

       if(!blog){
           res.status(404).send({"message":"Blog not found"})
        }
        
        res.status(302).send({message:"Blog Found",blog:blog})
    } catch (error) {
        res.status(402).send({message:"Error in getting specific post",error})
    }
    
}

//update blog

const updateBlog=async(req,res)=>{
    try {
        const id=req.params.id
        const { title, content,author} = req.body;
        const summary = await generateSummary(content);
        const updatedPost = await BlogModel.findByIdAndUpdate(
            id,
            {
              title,
              content,
              summary,
              author,
            },
            { new: true, runValidators: true } 
          );
        
        if(!updatedPost){
            res.status(404).send({message:"Blog not found"})
        }

        res.status(200).send({message:"Updated Successfully",updatedPost})

        
    } catch (error) {
        res.status(402).send({message:"Error in updating",error})
    }

    
}


//delete blog

const deleteBlog=async(req,res)=>{
    try {
        const id=req.params.id
        // console.log(id);
        
        const blogdelete=await BlogModel.findByIdAndDelete(id)
        if(blogdelete)
           res.status(200).send({message:"blog deleted successfully"});
    } catch (error) {
        res.status(402).send({message:"Error in deleting",error})
    }
}

module.exports={createBlogPost,getAllBlogs,getSpecificBlog,updateBlog,deleteBlog}