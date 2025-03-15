import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true,
}));

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan('dev'));


//Routes
import userRoutes from './routes/user.routes.js';

app.use('/api/v1/users', userRoutes);
//http://localhost:8000/api/v1/users/register



export {app};