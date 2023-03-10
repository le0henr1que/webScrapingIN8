import { Response, Request } from "express";
import { ListNotebook } from "./ListNotebookUseCase";

export class ListNotebookController {

    constructor(
        private listNotebookUseCase: ListNotebook,
    ){}

    async handle(response:Response, request:Request): Promise<Response>{

        try{
            const notebook = await this.listNotebookUseCase.execute(request.params.brand)

            

            return response.status(200).json({notebook})

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