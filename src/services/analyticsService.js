import Order from '../models/Order.js';
import Product from '../models/Product.js';

class AnalyticsService {
  async getRevenuePerVendor() {
    return await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } } },
      { $unwind: '$items' },
      { $group: { _id: '$items.vendorId', totalRevenue: { $sum: '$items.price' } } },
    ]);
  }

  async getTopProductsBySales() {
    return await Order.aggregate([
      { $unwind: '$items' },
      { $group: { _id: '$items.productId', totalSales: { $sum: '$items.quantity' } } },
      { $sort: { totalSales: -1 } },
      { $limit: 5 },
    ]);
  }

  async getAverageOrderValue() {
    const result = await Order.aggregate([
      { $group: { _id: null, averageValue: { $avg: { $sum: '$items.price' } } } },
    ]);
    return result.length ? result[0].averageValue : 0;
  }

  async getDailySalesForVendor(vendorId) {
    return await Order.aggregate([
      { $unwind: '$items' },
      { $match: { 'items.vendorId': vendorId, createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } },
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, dailySales: { $sum: '$items.price' } } },
      { $sort: { _id: 1 } },
    ]);
  }

  async getLowStockItems(vendorId) {
    return await Product.find({ vendorId, stock: { $lt: 10 } });
  }
}

const instance = new AnalyticsService();
Object.freeze(instance);

export default instance;
