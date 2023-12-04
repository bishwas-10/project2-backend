import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../store/postSlice';

const Posts = () => {
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getPosts() as any);
  },[dispatch])
  return (
    <div className="w-[60%] h-content">Posts</div>
  )
}

export default Posts