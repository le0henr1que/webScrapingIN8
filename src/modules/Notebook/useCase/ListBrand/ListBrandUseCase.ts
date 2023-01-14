import { Brand } from "../../entities/brand";
import { IBrandRepository  } from "../../repositories/ListBrandNotebook/IBrandList";

export class ListBrand{


    constructor(
        private brandRepositoryList: IBrandRepository
    ){}

    async execute(){
        const notebook = await this.brandRepositoryList.ListBrandNotebook()
        return notebook
    }
}