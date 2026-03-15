import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateKeyWords = async(resumeText, isMatching = false, jobDes = '')=> {
     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
     const model = genAI.getGenerativeModel({
         model: "gemini-flash-latest",
     });
     const prompt = isMatching? `
                    Act as like an Applicant Tracking System and check the following resume.
                    Point out the including ATS key words that match the following Job Description as a strength and suggest 10 necessary key words that should also be included to match better with the following Job description and to pass the comapny ATS tests.
                    Generate only in Json fromat.

                    structure:
                    "found_keywords" : [],
                    "missing_keywords" : [],

                    resume:
                    ${resumeText}

                    job description;
                    ${jobDes}
                    `: `
                    Act as like an Applicant Tracking System and check the following resume.
                    Point out the including ATS key words as a strength and suggest 10 necessary key words that should also be included.
                    Generate only in Json fromat.

                    structure:
                    "found_keywords" : [],
                    "missing_keywords" : [],

                    resume:
                    ${resumeText}
                    `;
    const result = await model.generateContent(prompt);
    const raw = result.response.text();

    const jsonStart = raw.indexOf('{');
    const jsonEnd = raw.indexOf('}')+1;
    const jsonResponse = raw.slice(jsonStart, jsonEnd);

    return JSON.parse(jsonResponse);
}