import app from './app.js';
import dotenv from 'dotenv';
import { dbConnection } from './database/config.js';

dotenv.config()

const port = process.env.PORT;

dbConnection();

app.listen(port);

console.log('Server running on port:'+port);