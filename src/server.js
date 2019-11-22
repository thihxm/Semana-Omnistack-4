import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const server = express();

mongoose.connect('mongodb+srv://tindev:tindev@cluster0-qml6v.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(express.json());
server.use(routes);

server.listen(3333);
