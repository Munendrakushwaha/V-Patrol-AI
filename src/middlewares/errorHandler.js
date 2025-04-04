// src/middlewares/errorHandler.js
import { config } from '../config.js'; // Import the config

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: config.nodeEnv === 'production' ? null : err.stack, // Use config.nodeEnv
    });
  };