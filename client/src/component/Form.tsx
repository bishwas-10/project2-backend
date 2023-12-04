import React, { useState } from "react";
import { Post } from "../store/postSlice";
import { useDispatch } from "react-redux";
import { createPost } from "../store/postSlice";
const Form = () => {
const [formData, setFormData]= useState<Post>({
    title:"",
    creator:"",
    location:"",
    description:"",
    selectedFile:"",

})
const dispatch= useDispatch();
const handleSubmit=(e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    console.log(formData);
    dispatch(createPost(formData)as any)
    setFormData({
        title:"",
        creator:"",
        location:"",
        description:"",
        selectedFile:"",
    
    })
}

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={formData.title}
            placeholder="Enter title"
            onChange={(e)=>setFormData({...formData, title: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="creator"
          >
            Creator
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creator"
            type="text"
            value={formData.creator}
            placeholder="Enter creator"
            onChange={(e)=>setFormData({...formData, creator: e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            value={formData.location}
            placeholder="Enter location"
            onChange={(e)=>setFormData({...formData, location: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={formData.description}
            placeholder="Enter description"
            onChange={(e)=>setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
            
          >
            Upload File
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="file"
            type="file"
            value={formData.selectedFile}
            onChange={(e)=>setFormData({...formData, selectedFile: e.target.value})}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
