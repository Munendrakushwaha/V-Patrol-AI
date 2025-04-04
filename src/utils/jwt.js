// src/utils/jwt.js
import jwt from 'jsonwebtoken';
import { config } from '../config.js'; // Import the config

export const generateToken = (id, role) => {
  return jwt.sign({ id, role }, config.jwtSecret, { // Use config.jwtSecret
    expiresIn: '1d',
  });
};