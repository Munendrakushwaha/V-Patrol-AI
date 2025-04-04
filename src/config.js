import dotenv from 'dotenv';

dotenv.config();

export const config = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/testdb',
  redisHost: process.env.REDIS_HOST || 'localhost',
  redisPort: process.env.REDIS_PORT || 6379,
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
}; 