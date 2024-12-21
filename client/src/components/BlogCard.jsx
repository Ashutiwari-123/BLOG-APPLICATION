import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BlogCard = ({ post}) => {

    const navigate=useNavigate()

    const handleClick=(id)=>{
        navigate(`/fullblog/${id}`)
    }

    // console.log(id);
    

    return (
        <div className="flex max-w-xl flex-col items-start justify-between cursor-pointer" onClick={()=>handleClick(post._id)}>
            <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">

                    <span className="absolute inset-0" />
                    {post.title}

                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.summary}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-between  w-full">

                <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">

                        <span className="absolute inset-0" />
                        Author : {post.author}

                    </p>
                </div>
                
                <button className='p-2 bg-black text-white text-sm font-semibold cursor-pointer'   >Get Full Blog</button>
            </div>

        </div>

    )
}

export default BlogCard
