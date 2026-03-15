import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import AnalyzeResume from "../controllers/resumeController.js";
import matchResume from "../controllers/matchController.js";

const router = express.Router();

router.post("/resume", upload.single("resume"), AnalyzeResume).post("/match",upload.single("resume"), matchResume);

export default router;
