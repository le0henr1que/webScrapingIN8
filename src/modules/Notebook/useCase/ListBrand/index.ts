import * as Puppeteer  from "../../repositories/ListBrandNotebook/implementation/PuppeteerNotebookRepositoryList";

import { ListBrandController } from "./ListBrandController";
import { ListBrand } from "./ListBrandUseCase";

const PuppeteerBrandRepository = new Puppeteer.PuppeteerBrandRepositoryList()


const listBrand= new ListBrand(
    PuppeteerBrandRepository
)

const listBrandController = new ListBrandController(
    listBrand
)

export {listBrand, listBrandController}