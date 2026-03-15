import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import analyzeRouter from './src/routes/analysisRoutes.js'
import swaggerSpec from './src/config/swagger.js';
import swaggerUi from 'swagger-ui-express'
import rateLimit from 'express-rate-limit';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const limiter = rateLimit({
    windowMs: 15 * 60 *1000,
    max : 5,
    message : 'Too many requests, please try again later.'
})

app.use(limiter);

app.use('/api/analyze', analyzeRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});