import express from 'express'

const server = express();

server.get('/', (req, res) => {
  return res.json({ message: 'Olá mundo' });
})

server.listen(3333);