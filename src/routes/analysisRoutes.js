import express from 'express';
import upload from '../middlewares/uploadMiddleware.js';
import { extractResumeText } from '../services/resumeParser.js';

const router = express.Router();

router.post('/resume',upload.single('resume'), async (req, res)=>{

    const filePath = req.file.path;
    const data = await extractResumeText(filePath);
    res.json({
        message : "Resume uploaded successfully",
        resume : data.substring(0, 500) + '...' 
    })
})

router.post('/match', (req, res)=>{
    res.json({
        message : 'Job matching route working',
    })
})

export default router;
