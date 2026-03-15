import express from "express";
import analyzeRouter from './src/routes/analysisRoutes.js'

const app = express();

app.use(express.json());


app.use('/api/analyze', analyzeRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});