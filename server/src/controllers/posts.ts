import {Request, Response, NextFunction} from 'express';
import PostMessage from '../models/postMessage';
import catchAsync from '../errors/catchAsync';

export const getPosts = catchAsync(async (req: Request, res: Response) => {
  const {author} = req.body;
  await PostMessage.find({author}).then((response) => {
    return res.send(response);
  });
});

export const createPosts = async (req: Request, res: Response) => {
  const {post} = req.body;
  await PostMessage.create(post).then((response) => {
    return res.send(response);
  });
};
