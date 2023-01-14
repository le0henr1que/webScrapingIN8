import * as dotenv from 'dotenv';
dotenv.config();
import { app } from "./app";


const PORT = process.env.PORT || 5000; 

const createServer = async () => {

    
    app.listen(PORT, () => {
      console.log(`Running at ${PORT}`);
    })



}
createServer()