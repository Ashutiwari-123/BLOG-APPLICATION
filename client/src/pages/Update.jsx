import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'

const Update = () => {
  const [formData,setFormData]=useState({
    title:"",
    content:"",
    summary:"",
    author:"",
})
  const [load,setLoad]=useState(false)

const params=useParams()

useEffect(()=>{
  const getBlog=async()=>{
    try {
      const result=await fetch(`https://blog-application-fps4.onrender.com/api/getspecific/${params.id}`)
      const data=await result.json()

      if(data){

        setFormData({...formData,title:data.blog.title,content:data.blog.content,author:data.blog.author})
        console.log(formData);

      }
    } catch (error) {
      console.log("Erron in getting blogs from update form",error);

    }
  }
  getBlog()
},[])


const navigate=useNavigate()


const submitHandler=async(e)=>{
    e.preventDefault()

    console.log(params.id);
    console.log(formData);



    try {
        setLoad(true)
        const response=await fetch(`https://arogo-ai-7v3e.onrender.com/api/updateblog/${params.id}`,{
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              ...formData
            })

        })
        const data=await response.json()

        if(data){
            setLoad(false)
            navigate('/')
        }
    } catch (error) {
        console.log("Error in sending blog data",error);

    }

}

const cancelHandler=()=>{
  navigate('/')
}
  return (
    <div className='max-w-3xl mx-auto p-3'>
    {
      load?<Loader/>:
      <form onSubmit={submitHandler}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Update Blog</h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Update your blog from here....
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Author
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

                    <input
                      id="author"
                      name="author"
                      type="text"
                      placeholder="janesmith"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="title of your blog"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    id="content"
                    name="content"
                    rows={3}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                  />
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">Draft your blog here.</p>
              </div>


            </div>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={cancelHandler}>
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Blog
          </button>
        </div>
      </form>
    }
    </div>
  )
}

export default Update
