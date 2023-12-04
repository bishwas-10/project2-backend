import express from 'express';
import {getPosts, createPosts} from '../controllers/posts';

const PostRouter = express.Router();

PostRouter.get('/', getPosts);
PostRouter.post('/', createPosts);

export default PostRouter;
