import { extractResumeText } from "../services/resumeParser.js";
import { aIService } from "../services/aiService.js";
import { generateKeyWords } from "../services/atsAiService.js";
import { saveResume } from "../services/saveResume.js";
import fs from "fs";

const analyzeResume = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No resume file uploaded",
    });
  }
  const file = req.file;
  const userId = req.user?.id ?? null;
  const filePath = req.file.path;
  const data = await extractResumeText(filePath);
  fs.unlinkSync(filePath);
  const analysis = await aIService(data);
  const keywords = await generateKeyWords(data);
  let resume = null;

  if (userId) {
    resume = await saveResume({
      fileName: file.originalname,
      fileType: file.mimetype,
      userId,
      atsScore: analysis.ATS_score,
      recommendation: analysis.resume_improvements_suggestions.join("\n"),
    });
  }
  res.json({
    message: "Resume uploaded successfully",
    analysis,
    keywords,
    resume,
  });
};

export default analyzeResume;
