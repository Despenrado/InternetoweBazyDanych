import {Router} from 'express';
import profileController from '../controllers/profileController';
import homepageController from '../controllers/profileController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
  const api = Router();

    api.get('/', jwtAuth, profileController.showProfile);

    api.get('/stats', jwtAuth,profileController.showStatistic);

    api.put('/:id', jwtAuth,profileController.editProfile);

  return api;
};
