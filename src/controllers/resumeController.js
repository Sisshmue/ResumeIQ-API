import { extractResumeText } from "../services/resumeParser.js";
import { aIService } from "../services/aiService.js";

const analyzeResume = async (req, res) => {
  const filePath = req.file.path;
  const data = await extractResumeText(filePath);
  const analysis = await aIService(data);

  res.json({
    message: "Resume uploaded successfully",
    analysis,
  });
}

export default analyzeResume;