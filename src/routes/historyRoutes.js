import express from "express";
import { getResumeHistory } from "../controllers/historyController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', authenticate, getResumeHistory);

export default router;