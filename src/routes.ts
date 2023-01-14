import { Router } from 'express';
import { listnotebookController } from './modules/Notebook/useCase/ListNotebook/index';
import { listBrandController } from './modules/Notebook/useCase/ListBrand/index';



const router = Router()


router.get('/notebook/:brand',  (request, response) => {
    return listnotebookController.handle(response, request);
})



router.get('/notebook',  (request, response) => {
    return listBrandController.handle(response);

})




export {router}