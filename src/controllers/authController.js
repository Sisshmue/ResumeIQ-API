import { register, login } from "../services/authService.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { user, token } = await register(name, email, password);
    res.status(200).json({
      message: "User created sucessfully!",
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.status(200).json({
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
