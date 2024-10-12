import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import userRoutes from './routes/user.routes.js';
import tweetRoutes from './routes/tweet.routes.js';
import followerRoutes from './routes/follower.routes.js';

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cookieParser())

app.use("/x",userRoutes);
app.use("/x",tweetRoutes);
app.use("/x",followerRoutes);

export default app;