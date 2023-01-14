import { Router } from 'express';
import { listAllCarController } from './modules/Notebook/useCase/ListNotebook/index';



const router = Router()


router.get('/notebook',  (request, response) => {
    return listAllCarController.handle(response);

})



export {router}