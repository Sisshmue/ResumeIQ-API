# 📑 ResumeIQ API
> **AI-Powered Resume Analysis & ATS Optimization Engine**

ResumeIQ is a robust REST API designed to bridge the gap between job seekers and modern hiring systems. By leveraging the **Gemini AI API**, it transforms raw resume data into structured, actionable insights—helping developers understand how they rank in the eyes of an **Applicant Tracking System (ATS)**.

---

## 🚀 Live Resources
* **[Live Demo](https://resumeiq-api.onrender.com/api-docs/#)**
* **[Swagger API Documentation](https://resumeiq-api.onrender.com/api-docs/#)**

---

## ✨ Key Features

### 🧠 AI Resume Analysis
The core engine scans resumes to generate a comprehensive profile including:
* **Scoring:** ATS Score, Skill Score, and Experience Score.
* **Detection:** Automatic Experience Level identification (e.g., Junior, Mid, Senior).
* **Feedback:** Curated lists of **Strengths**, **Weaknesses**, and **Improvement Suggestions**.

### 🔍 Keyword Extraction
The API compares your resume against industry standards to find:
* **Found Keywords:** Skills already present (e.g., *Flutter, Dart, Firebase*).
* **Missing Keywords:** Critical gaps to fill (e.g., *Unit Testing, SOLID Principles*).

### 📈 History Tracking
Authenticated users can maintain a personal repository of their career growth:
* **Metadata Storage:** Resume file details and upload timestamps.
* **Progress Mapping:** Compare scores across different versions of your resume.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL, Prisma ORM |
| **AI Engine** | Google Gemini API, Groq AI |
| **Auth** | JWT (JSON Web Tokens) |
| **Documentation** | Swagger (OpenAPI) |
| **Deployment** | Render, Neon |

---

## 🏗️ System Architecture

```text
Client ──▶ REST API (Express) ──▶ Analysis Engine ──▶ Gemini AI ──▶ PostgreSQL
```
---

# 📂 Project Structure
```
ResumeIQ-API
├── controllers/      # Auth, Analysis, and History logic
├── routes/           # API Endpoint definitions
├── middleware/       # JWT Authentication & Security
├── prisma/           # Database schema & ORM config
├── utils/            # AI Service & Gemini Integration
└── server.js         # Entry Point
```
---
# 🔌 API Endpoints
Authentication
POST /auth/register — Create a new developer account.

POST /auth/login — Authenticate and receive a Bearer token.

Resume Analysis
POST /analysis/upload — Submit a resume for full AI evaluation.

History
GET /history — Fetch all previous analysis records.

---

# 👨‍💻 Author
Siss Hmue Aung
Flutter & Fullstack Developer

"Building tools that empower developers to land their dream roles."

GitHub: @Sisshmue

Expertise: Flutter, Node.js, PostgreSQL, AI Integration.
