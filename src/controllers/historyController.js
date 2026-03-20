import { getHistory } from "../services/history.js";

export const getResumeHistory = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({
        message: "Please login or sign Up first",
      });
    }

    const userId = user.id;
    const resumes = await getHistory(userId);
    res.status(200).json({
      message: "Get history successfully",
      resumes,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
