ResumeIQ API

AI-powered Resume Analysis API that evaluates resumes using ATS-style scoring, keyword extraction, and intelligent career recommendations.

ResumeIQ helps developers and job seekers understand how well their resumes match modern hiring systems by providing structured insights such as skill evaluation, experience level detection, missing keywords, and improvement suggestions.

The system transforms raw resume files into actionable data that can be used by mobile apps, dashboards, or career tools.

Live Demo

Swagger API Documentation
https://resumeiq-api.onrender.com/api-docs/#/Resume%20Analysis

Key Features
AI Resume Analysis

ResumeIQ analyzes resumes and generates structured insights including:

ATS Score

Skill Score

Experience Score

Experience Level Detection

Resume Strengths

Resume Weaknesses

Suggested Job Roles

Resume Improvement Suggestions

Recommended Skills to Learn

Keyword Extraction

The API extracts important resume keywords and identifies missing industry-relevant keywords.

Example output:

Found Keywords:
Flutter
Dart
Firebase
REST API
Clean Architecture
BLoC

Missing Keywords:
Unit Testing
Widget Testing
SOLID Principles
Agile Methodology
Material Design

This helps users optimize their resumes for ATS systems used by recruiters.

Resume Scoring System

ResumeIQ evaluates resumes using multiple scoring dimensions:

ATS Score
Skill Score
Experience Score

These scores provide a quick assessment of how competitive a resume is for a specific role.

Job Role Recommendation

Based on the extracted skills and experience, the system suggests potential career roles such as:

Junior Flutter Developer

Mobile Application Developer

Software Engineer (Mobile)

Resume History Tracking

Authenticated users can store and retrieve previously analyzed resumes.

Stored information includes:

Resume file metadata

Analysis results

Recommendations

Upload timestamps

Example API Response
{
  "ATS_score": 80,
  "skill_score": 90,
  "experience_score": 60,
  "experience_level": "Junior",
  "overview": "With this resume, you can apply to 70% of junior Flutter roles.",
  "strengths": [
    "Hands-on experience in Flutter and Dart",
    "Experience with Clean Architecture and BLoC state management"
  ],
  "weaknesses": [
    "Lack of experience in large-scale team projects"
  ],
  "suggested_job_roles": [
    "Junior Flutter Developer",
    "Mobile Application Developer"
  ]
}

The system returns structured JSON output, making it easy for frontend applications or analytics systems to consume.

Tech Stack

Backend

Node.js

Express.js

Database

PostgreSQL

Prisma ORM

AI Integration

Gemini API

Authentication

JWT Authentication

Documentation

Swagger (OpenAPI)

Deployment

Render

System Architecture
Client
   │
   ▼
REST API (Express.js)
   │
   ▼
Resume Analysis Engine
   │
   ▼
AI Model Processing
   │
   ▼
Structured Resume Insights
   │
   ▼
PostgreSQL Database (Prisma ORM)
Project Structure
ResumeIQ-API
│
├── controllers
│   ├── authController.js
│   ├── analysisController.js
│   └── historyController.js
│
├── routes
│   ├── authRoutes.js
│   ├── analysisRoutes.js
│   └── historyRoutes.js
│
├── middleware
│   └── authenticate.js
│
├── prisma
│   └── schema.prisma
│
├── utils
│   └── aiService.js
│
└── server.js
API Endpoints

Authentication

POST /auth/register
POST /auth/login

Resume Analysis

POST /analysis/upload

Resume History

GET /history

Full API documentation is available via Swagger.

Use Cases

ResumeIQ can be used for:

Resume review tools

Career coaching platforms

Job preparation applications

AI-powered hiring assistants

Resume improvement dashboards

Developer portfolio projects

Why This Project Matters

Modern companies use ATS (Applicant Tracking Systems) to filter resumes before recruiters see them.

ResumeIQ demonstrates how AI can be used to:

analyze resumes automatically

extract meaningful insights

provide actionable career feedback

help job seekers optimize their resumes

This project also showcases how to integrate AI services with backend APIs to create real-world developer tools.

Author

Siss Hmue Aung

Flutter Developer | Backend Developer

Skills:

Flutter

Node.js

Express

PostgreSQL

Prisma

AI API Integration

GitHub
https://github.com/Sisshmue

Future Improvements

Planned improvements include:

Resume PDF parsing improvements

Job description comparison analysis

Resume improvement scoring over time

Frontend dashboard (Flutter)

Resume analytics visualization
