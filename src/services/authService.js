import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { config } from '../config.js'; // Import the config

class AuthService {
  // Define your methods here
  async signUp(userData) {
    const user = new User(userData);
    await user.save();
    return { message: 'User registered successfully' };
  }

  async login(credentials) {
    const { username, password } = credentials;
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id, role: user.role }, config.jwtSecret, { // Use config.jwtSecret
        expiresIn: '1d',
      });
      return { token };
    } else {
      throw new Error('Invalid credentials');
    }
  }

  // Add more methods as needed
}

const instance = new AuthService();
Object.freeze(instance);

export default instance;
