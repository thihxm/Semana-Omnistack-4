import Router from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/devs', (req, res) => {
  return res.json(req.body);
});

export default routes;
