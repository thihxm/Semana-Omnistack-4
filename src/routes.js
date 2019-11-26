import Router from 'express';

import DevController from './app/controllers/DevController';
import LikeController from './app/controllers/LikeController';
import DislikeController from './app/controllers/DislikeController';

const routes = Router();

routes.get('/', (req, res) => res.json({ api: true }));

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

export default routes;
