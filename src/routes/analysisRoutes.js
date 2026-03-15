import express from 'express';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post('/resume',upload.single('resume'), (req, res)=>{
    res.json({
        message : "Resume uploaded successfully",
        file : req.file,
    })
})

router.post('/match', (req, res)=>{
    res.json({
        message : 'Job matching route working',
    })
})

export default router;
