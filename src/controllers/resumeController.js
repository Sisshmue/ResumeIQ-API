import { extractResumeText } from "../services/resumeParser.js";
import { aIService } from "../services/aiService.js";
import { generateKeyWords } from "../services/atsAIService.js";
import fs from "fs";

const analyzeResume = async (req, res) => {
  const filePath = req.file.path;
  const data = await extractResumeText(filePath);
  fs.unlinkSync(filePath);
  const analysis = await aIService(data);
  const keywords = await generateKeyWords(data);
  res.json({
    message: "Resume uploaded successfully",
    analysis,
    keywords,
  });
};

export default analyzeResume;
