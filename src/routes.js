import Router from 'express';

import DevController from './app/controllers/DevController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/devs', DevController.store);

export default routes;
