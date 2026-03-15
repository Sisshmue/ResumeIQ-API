import { GoogleGenerativeAI } from "@google/generative-ai";
import { Groq } from "groq-sdk/client.js";

export const analyzeResume = async (
  resumeText,
  matchApi = false,
  jobDes = "",
) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
    });

    const groqAI = new Groq({apiKey: process.env.GROQ_API_KEY});

    const prompt = matchApi
      ? `
                    Analyze this resume and calculate a match score against the following job description. Respond ONLY in raw JSON with no markdown, no code fences, no extra text.
                    
                    For "overview": Write a single honest sentence telling the candidate how well their resume matches this specific job. 
                    Be direct and encouraging. Example: "Your resume is a strong match for this role, covering about 80% of the requirements."
                    Overview should not be more than 50 words.

                    Structure:
                    {
                    "resume_score": percentage number between 0 and 100,
                    "overview": string,
                    "strengths": [],
                    "weaknesses": [],
                    "suggested_job_roles": [],
                    "resume_improvements_suggestions": [],
                    "recommended_skills_to_learn": []
                    }

                    Resume:
                    ${resumeText}

                    Job Description:
                    ${jobDes}
                    `
      : `
                    Analyze this resume and respond ONLY in raw JSON with no markdown, no code fences, no extra text.
                    
                    For "overview": Write a single honest sentence telling the candidate what their resume can get them in today's job market.
                    Be direct and realistic. Example: "With this resume, you can confidently apply to about 60% of junior developer roles right now."
                    Overview should not be more than 50 words.

                    Structure:
                    {
                    "resume_score": percentage number between 0 and 100,
                    "overview": string,
                    "strengths": [],
                    "weaknesses": [],
                    "suggested_job_roles": [],
                    "resume_improvements_suggestions": [],
                    "recommended_skills_to_learn": []
                    }

                    Resume:
                    ${resumeText}
                    `;
    const result = await model.generateContent(prompt);
    const rawText = result.response.text();
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    const groqResult = await groqAI.chat.completions.create({
        model : 'llama-3.3-70b-versatile',
        messages : [{role: 'user', content: prompt}],
        response_format : {type : 'json_object'}
    })

    return JSON.parse(groqResult.choices[0].message.content);
  } catch (error) {
    throw new Error("Error analyzing resume: " + error.message);
  }
};
