import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api/index"
import * as types from './constant'



export interface Post {
    title: string;
    creator:string;
    location:string;
    description:string;
    selectedFile?:string;
    createdAt?:string;
  }
  
  interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState:PostsState={
    posts:[],
    loading:false,
    error:null,
  }

export const createPost = createAsyncThunk(
    types.CREATE_POST_REQUEST,
    async (postData: Post, thunkAPI)=>{
        const response = await api.createPost(postData) ;
        return response.data;
    }
)
export const getPosts = createAsyncThunk(
    types.GET_POSTS_REQUEST,
    async (_, thunkAPI)=>{
        const response = await api.getPosts();
        return response.data;
    }
)
const postsSlice = createSlice({
    name:"post",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      })
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});
    
export default postsSlice.reducer;