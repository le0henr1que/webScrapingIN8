import * as Puppeteer  from "../../repositories/ListNotebook/implementation/PuppeteerNotebookRepositoryList";

import { ListNotebookController } from "./ListNotebookController";
import { ListNotebook } from "./ListNotebookUseCase";

const PuppeteerNotebookRepository = new Puppeteer.PuppeteerNotebookRepositoryList()


const listNotebook = new ListNotebook(
    PuppeteerNotebookRepository
)

const listnotebookController = new ListNotebookController(
    listNotebook
)

export {listNotebook, listnotebookController}