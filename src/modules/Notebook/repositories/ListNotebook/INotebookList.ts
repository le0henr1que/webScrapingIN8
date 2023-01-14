import { Notebook } from "../../entities/Notebook";

export interface INotebookRepository{
    ListNotebook(): Promise<Notebook>;
}