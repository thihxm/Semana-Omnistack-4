/* eslint-disable no-underscore-dangle */
import Dev from '../models/Dev';

class LikeController {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev does not exist' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('Match');
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
}

export default new LikeController();
