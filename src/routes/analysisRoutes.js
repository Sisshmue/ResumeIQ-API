import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import AnalyzeResume from "../controllers/resumeController.js";
import matchResume from "../controllers/matchController.js";

const router = express.Router();
/**
 * @swagger
 * /api/analyze/resume:
 *   post:
 *     summary: Analyze a resume using AI
 *     description: Upload a resume PDF and receive AI-powered analysis.
 *     tags: [Resume Analysis]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Resume analysis result
 *         content:
 *           application/json:
 *             example:
 *               message: Resume uploaded successfully
 *               analysis:
 *                 ATS_score: 85
 *                 skill_score: 90
 *                 experience_score: 80
 *                 experience_level: Junior
 *                 overview: With this resume, you can apply to most junior developer roles.
 *                 strengths:
 *                   - Strong foundation in computer science
 *                   - Proficient in multiple programming languages
 *                 weaknesses:
 *                   - Limited work experience
 *                 suggested_job_roles:
 *                   - Junior Flutter Developer
 *                   - Junior Full-Stack Developer
 *                 recommended_skills_to_learn:
 *                   - Cloud computing
 *                   - DevOps
 *               keywords:
 *                 including_words:
 *                   - Software Engineer
 *                   - Flutter
 *                 suggested_words:
 *                   - Node.js
 *                   - Express.js
 */
router.post("/resume", upload.single("resume"), AnalyzeResume);

/**
 * @swagger
 * /api/analyze/match:
 *   post:
 *     summary: Match resume with job description
 *     tags: [Job Matching]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *               jobDescription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resume analysis result
 *         content:
 *           application/json:
 *             example:
 *               message: Resume uploaded successfully
 *               analysis:
 *                 ATS_score: 85
 *                 skill_score: 90
 *                 experience_score: 80
 *                 experience_level: Junior
 *                 overview: With this resume, you can apply to most junior developer roles.
 *                 strengths:
 *                   - Strong foundation in computer science
 *                   - Proficient in multiple programming languages
 *                 weaknesses:
 *                   - Limited work experience
 *                 suggested_job_roles:
 *                   - Junior Flutter Developer
 *                   - Junior Full-Stack Developer
 *                 recommended_skills_to_learn:
 *                   - Cloud computing
 *                   - DevOps
 *               keywords:
 *                 including_words:
 *                   - Software Engineer
 *                   - Flutter
 *                 suggested_words:
 *                   - Node.js
 *                   - Express.js
 */

router.post("/match", upload.single("resume"), matchResume);

export default router;
