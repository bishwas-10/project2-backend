import {Request, Response} from 'express';
import {ApplicationError} from '../errors/application-error';

export function errorHandler(error: Error, req: Request, res: Response) {
  if (error instanceof ApplicationError) {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  } else {
    console.log(error);
    res.status(400).json({error: 'Internal Server Error'});
  }
}
