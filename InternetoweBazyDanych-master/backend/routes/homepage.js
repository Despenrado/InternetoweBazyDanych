import {Router} from 'express';
import homepageController from '../controllers/homepageController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
  const api = Router();

    api.get('/', homepageController.getRuns);

    api.post('/:id/runner', jwtAuth, homepageController.signupRun);

  return api;
};