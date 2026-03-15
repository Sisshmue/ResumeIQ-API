import { GoogleGenerativeAI } from "@google/generative-ai";

export const analyzeResume = async (resumeText) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
    });
    const prompt = `
                Analyze this resume and respond ONLY in JSON.

                Structure:

                {
                "resume_score": number,
                "strengths": [],
                "weaknesses": [],
                "suggested_job_roles": [],
                "recommended_skills_to_learn": []
                }

                Resume:
                ${resumeText}
                `;
    const result = await model.generateContent(prompt);
    const rawText = result.response.text();
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);
    return parsed;
  } catch (error) {
    throw new Error("Error analyzing resume: " + error.message);
  }
};
