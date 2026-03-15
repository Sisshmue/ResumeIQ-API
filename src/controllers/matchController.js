import { extractResumeText } from "../services/resumeParser.js";
import { aIService } from "../services/aiService.js";

const matchResume = async (req, res) => {
    const filePath = req.file.path;
    const jobDes = req.body.jobDescription;
    const data = await extractResumeText(filePath);
    if(!jobDes){
        return res.status(400).json({message: "Job description is required for matching"});
    }
    const analysis = await aIService(data, true, jobDes);
  res.json({
    message: "Resume uploaded successfully",
    analysis,
  });
}

export default matchResume;