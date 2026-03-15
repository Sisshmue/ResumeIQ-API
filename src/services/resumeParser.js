import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

export const extractResumeText = async (filePath) => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const parser = new PDFParse({data: dataBuffer});
        const data = await parser.getText();
        return data.text;
    } catch (error) {
        throw new Error('Error extracting resume text: ' + error.message);
    }
}