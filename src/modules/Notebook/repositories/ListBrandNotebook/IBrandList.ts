import { Brand } from "../../entities/brand";

export interface IBrandRepository{
    ListBrandNotebook(): Promise<Brand>;
}