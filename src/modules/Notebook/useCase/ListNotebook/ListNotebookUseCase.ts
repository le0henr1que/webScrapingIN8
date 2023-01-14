import { Notebook } from "../../entities/Notebook";
import { INotebookRepository  } from "../../repositories/ListNotebook/INotebookList";

export class ListNotebook{

    constructor(
        private notebookRepositoryList: INotebookRepository
    ){}

    async execute(){
        const notebook = await this.notebookRepositoryList.ListNotebook()
        return notebook
    }
}