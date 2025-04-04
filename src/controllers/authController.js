import AuthService from '../services/authService.js';

export const register = async (req, res) => {
  try {
    const response = await AuthService.signUp(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const response = await AuthService.login(req.body);
    res.json(response);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
