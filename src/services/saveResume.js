import prisma from "../config/prisma.js";

export const saveResume = async ({
  fileName,
  fileType,
  userId,
  atsScore,
  recommendation,
}) => {
  const resume = await prisma.resume.create({
    data: {
      fileName,
      fileType,
      userId,
      recommendation: {
        create: {
          atsScore,
          recommendation,
        },
      },
    },
    include: {
      recommendation: true,
    },
  });
  return resume;
};
