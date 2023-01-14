import { Response, Request } from "express";
import { ListBrand } from "./ListBrandUseCase";

export class ListBrandController {

    constructor(
        private listNotebookUseCase: ListBrand,
    ){}

    async handle(response:Response): Promise<Response>{

        try{
            const brand = await this.listNotebookUseCase.execute()
          
            return response.status(200).json({brand})

        }catch(err){
            console.log(err)
            if (err instanceof Error) {
         
                return response.status(400).json({
                    message: err.message
                })
              } else {
         
                return response.status(400).json({
                    message:'Unexpected error'
                })
              }
          
            
        }
    }
}