import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import analyzeRouter from './src/routes/analysisRoutes.js'
import swaggerSpec from './src/config/swagger.js';
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import { limiter } from './src/middlewares/limitMiddleware.js';

const app = express();

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.use(express.json());
app.use(limiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/analyze', analyzeRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});