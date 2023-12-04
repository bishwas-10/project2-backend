import axios from "axios";
import { Post } from "../postSlice";






const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // This assumes that the requests will be prefixed with '/api' and be redirected by the proxy during development
  // Other axios configurations if needed
});

export const createPost = async (postData: any) => {
  try {
    const response = await instance.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await instance.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export default instance; // You can also export the axios instance for additional usage


