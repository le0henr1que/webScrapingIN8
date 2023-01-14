import express from 'express'
import { router } from './routes'

import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express()

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.use(express.json())
app.use(router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


export { app }