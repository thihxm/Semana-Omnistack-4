import dotenv from 'dotenv';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

dotenv.config();

const server = express();

mongoose.connect(process.env.APP_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);
