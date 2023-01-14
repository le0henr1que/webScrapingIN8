import { Notebook } from "../../entities/Notebook";
import { INotebookRepository  } from "../../repositories/ListNotebook/INotebookList";

export class ListNotebook{

    constructor(
        private notebookRepositoryList: INotebookRepository
    ){}

    async execute(brand:string){
        const notebook = await this.notebookRepositoryList.ListNotebook(brand)
        
        return notebook
    }
}