import {Router} from 'express';
import organizer from '../controllers/organizerController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
    const api = Router();

    api.post('/add', jwtAuth, organizer.addRun);

    api.put('/:id/edit', jwtAuth, organizer.editRun);

    api.get('/:id/runners', jwtAuth, organizer.showRunners);

    api.post('/:id/finish', jwtAuth, organizer.finishRun);

    api.post('/result/:id', jwtAuth, organizer.addResults);
    
    api.put('/route/:id', jwtAuth, organizer.editRoute);

    api.post('/route/add', jwtAuth, organizer.addRoute);

    // api.put('/runs/:id', jwtAuth, organizer.confirmRun);

    api.delete('/:id/delete', jwtAuth, organizer.deleteRun);

    api.get('/:id/read', jwtAuth, organizer.readRun);

    return api;
}