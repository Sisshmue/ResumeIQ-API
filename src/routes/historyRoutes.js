import express from "express";
import { getResumeHistory } from "../controllers/historyController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/history:
 *   get:
 *     summary: Get resume analysis history
 *     description: Returns all resumes analyzed by the authenticated user.
 *     tags: [Resume]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of analyzed resumes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   fileName:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     example: 2026-03-20T10:00:00Z
 *                   recommendation:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         atsScore:
 *                           type: integer
 *                         recommendation:
 *                           type: string
 *       401:
 *         description: Unauthorized
 */
router.get('/', authenticate, getResumeHistory);

export default router;