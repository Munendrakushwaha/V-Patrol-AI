// src/utils/validation.js
import Joi from 'joi';

export const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('customer', 'vendor', 'admin').required(),
  });
  return schema.validate(data);
};

export const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};