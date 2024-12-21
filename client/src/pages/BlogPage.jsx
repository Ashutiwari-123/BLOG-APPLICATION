import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const BlogPage = () => {
  const params=useParams()
  const [post,setPost]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    const getPost=async()=>{
      try {
        const result=await fetch(`https://arogo-ai-7v3e.onrender.com/api/getspecific/${params.id}`)
        const data=await result.json()

        if(data){
          console.log(data);
          setPost(data.blog)
        }
      } catch (error) {
        console.log("error in getting perticular post",error);
        
      }
    }

    getPost()
  },[])

  
  const deleteHandler=async()=>{
    try {
    const res= await fetch(`https://arogo-ai-7v3e.onrender.com/api/deleteblog/${params.id}`,{
      method:"delete"
    })

    const data=await res.json()

    if(data){
      alert("Blog deleted Successfully")
      navigate('/')
    }
    } catch (error) {
      
    }
  }
  
  return (
    <div className="flex max-w-3xl flex-col items-start mx-auto justify-between  p-3" >
            <div className="group relative">
                <h3 className="mt-3 md:text-4xl text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}

                </h3>
                <p className="mt-5  md:text-2xl text-lg  text-gray-600">{post.content}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-between  w-full">

                <div className="text-lg">
                    <p className="font-semibold text-gray-900">

                        <span className="absolute inset-0" />
                        Author : {post.author}

                    </p>
                </div>
                
            </div>

            <div className='w-full flex justify-between items-center gap-6 my-5 '>
              <Link to={`/update/${params.id}`}><button className='bg-green-500 text-white hover:bg-green-300 p-2 rounded-lg text-lg outline-none' >Edit blog</button></Link>
              <button onClick={deleteHandler} className='bg-red-500 text-white hover:bg-red-300 p-2 rounded-lg text-lg outline-none'>Delete blog</button>
            </div>




        </div>
  )
}

export default BlogPage
