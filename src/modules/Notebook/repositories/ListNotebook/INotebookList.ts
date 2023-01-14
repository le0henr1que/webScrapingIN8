import { Notebook } from "../../entities/Notebook";

export interface INotebookRepository{
    ListNotebook(brand:string): Promise<Notebook>;
}