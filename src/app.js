import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import followerRoutes from './routes/follower.routes.js';

const app = express();

app.use(morgan('dev'));

app.use("/x",userRoutes);
app.use("/x",postRoutes);
app.use("/x",followerRoutes);

export default app;