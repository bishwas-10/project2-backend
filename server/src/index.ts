import dotenv from 'dotenv';
import express, {Application} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import PostRouter from './routes/posts';
import helmate from 'helmet';
import {errorHandler} from './controllers/errorHandler.controller';
import morgan from 'morgan';

dotenv.config();

const app: Application = express();
const MONGO_URL: string = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

app.use(helmate());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({limit: '30mb', extended: true}));

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('connected to mongo db'))
  .catch((err) => console.log(err));

app.use('/api/post', PostRouter);
app.use(errorHandler);

app.listen(PORT, (): void => {
  console.log(`server is listening on port http://localhost:${PORT}`);
});
