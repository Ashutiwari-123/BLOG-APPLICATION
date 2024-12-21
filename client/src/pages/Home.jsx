import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'



const Home = () => {
    const [posts,setPosts]=useState([])

    useEffect(()=>{

        const getPosts=async()=>{
            try {
                const results=await fetch('http://localhost:3000/api/getallblogs')
                const data=await results.json()
                
                if(data){
                    console.log(data);
                    setPosts(data.blogs)
                }
            } catch (error) {
                console.log('error in fetching data',error);      
            }
        }

        getPosts()
    },[])

  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Read Newest Blog</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Get updated by the things that are currently trending right now.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Home
