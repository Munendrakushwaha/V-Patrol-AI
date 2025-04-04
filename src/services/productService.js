import Product from '../models/Product.js';
import { config } from '../config.js'; // Import the config
import Redis from 'ioredis';

class ProductService {
  constructor() {
    this.redis = new Redis({
      host: config.redisHost,
      port: config.redisPort,
    });
  }

  async createProduct(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async updateProduct(id, updates) {
    return await Product.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
  }

  async deleteProduct(id) {
    return await Product.findByIdAndUpdate(id,{deletedAt: Date.now()});
  }

  async getProductList() {
    const cacheKey = 'productList';
    
    // Check if the product list is in the cache
    const cachedProducts = await this.redis.get(cacheKey);
    if (cachedProducts) {
      return JSON.parse(cachedProducts);
    }

    // If not in cache, fetch from the database
    const products = await Product.find();

    // Store the result in the cache for future requests
    await this.redis.set(cacheKey, JSON.stringify(products), 'EX', 3600); // Cache for 1 hour

    return products;
  }
}

const instance = new ProductService();
Object.freeze(instance);

export default instance;
