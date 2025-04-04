import request from 'supertest';
import app from '../app.js'; // Import your Express app

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'testpass',
        role: 'customer',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });

  it('should login a user', async () => {
    // First, register the user
    await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'testpass',
        role: 'customer',
      });

    // Then, attempt to login
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpass',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
}); 