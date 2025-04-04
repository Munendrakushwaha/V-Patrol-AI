import request from 'supertest';
import app from '../app.js';

describe('Product API', () => {
  let token;

  beforeAll(async () => {
    // Login to get a token
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'vendoruser',
        password: 'vendorpass',
      });
    token = res.body.token;
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'New Product',
        price: 100,
        stock: 50,
        category: 'Electronics',
        vendorId:"122342"
      });
    console.log("reponse is:::::::::::::::::", res);
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'New Product');
  });
}); 