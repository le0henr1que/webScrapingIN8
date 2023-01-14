import * as Puppeteer  from "../../repositories/ListNotebook/implementation/PuppeteerNotebookRepositoryList";

import { ListAllCarController } from "./ListNotebookController";
import { ListNotebook } from "./ListNotebookUseCase";

const PuppeteerNotebookRepository = new Puppeteer.PuppeteerNotebookRepositoryList()


const listNotebook = new ListNotebook(
    PuppeteerNotebookRepository
)

const listAllCarController = new ListAllCarController(
    listNotebook
)

export {listNotebook, listAllCarController}