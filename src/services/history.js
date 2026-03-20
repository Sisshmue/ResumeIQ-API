import prisma from "../config/prisma.js";

export const getHistory = async ({ userId }) => {
  const resumes = await prisma.resume.findMany({
    where: { userId },
    include: {
      recommendation: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return resumes;
};
