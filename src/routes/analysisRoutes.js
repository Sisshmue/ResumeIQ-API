import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { extractResumeText } from "../services/resumeParser.js";
import { analyzeResume } from "../services/aiService.js";

const router = express.Router();

router.post("/resume", upload.single("resume"), async (req, res) => {
  const filePath = req.file.path;
  const data = await extractResumeText(filePath);
  const analysis = await analyzeResume(data);

  res.json({
    message: "Resume uploaded successfully",
    analysis,
  });
});

router.post("/match",upload.single("resume"), async (req, res) => {
    const filePath = req.file.path;
    const jobDes = req.body.jobDescription;
    const data = await extractResumeText(filePath);
    if(!jobDes){
        return res.status(400).json({message: "Job description is required for matching"});
    }
    const analysis = await analyzeResume(data, true, jobDes);
  res.json({
    message: "Resume uploaded successfully",
    analysis,
  });
});

export default router;
