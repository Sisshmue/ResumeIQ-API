import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ResumeIQ API",
      version: "1.0.0",
      description: "AI-powered resume analysis and job matching API",
    },
    tags: [
      {
        name: "Authentication",
        description: "User authentication endpoints",
      },
      {
        name: "Resume Analysis",
        description: "Analyze resumes using AI",
      },
      {
        name: "Job Matching",
        description: "Match resumes with job descriptions",
      },
      {
        name: "Resume History",
        description: "User resume history",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [
      {
        url: "https://resumeiq-api.onrender.com",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
