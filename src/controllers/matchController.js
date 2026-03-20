import { extractResumeText } from "../services/resumeParser.js";
import { aIService } from "../services/aiService.js";
import { generateKeyWords } from "../services/atsAiService.js";
import fs from "fs";
import { saveResume } from "../services/saveResume.js";

const matchResume = async (req, res) => {
  const file = req.file;
  const userId = req.user?.id ?? null;
  let resume;
  if (!file) {
    return res.status(400).json({ message: "No file to analyze!" });
  }
  const filePath = file.path;
  const jobDes = req.body.jobDescription;
  const data = await extractResumeText(filePath);
  if (!jobDes) {
    return res
      .status(400)
      .json({ message: "Job description is required for matching" });
  }
  fs.unlinkSync(filePath);
  const analysis = await aIService(data, true, jobDes);
  const keywords = await generateKeyWords(data, true, jobDes);
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
  });
};

export default matchResume;
