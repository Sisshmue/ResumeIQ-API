import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (username, email, password) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exist");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name: username,
      email,
      password: hashPassword,
    },
  });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d;",
  });

  return {
    user,
    token,
  };
};

export const login = async (email, password) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    throw new Error("User does not exist");
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    throw new Error("Invalid Credential");
  }

  const token = jwt.sign(
    {
      id: existingUser.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  return {
    user: existingUser,
    token,
  };
};
