import Order from '../models/Order.js';
import Product from '../models/Product.js';

class OrderService {
  async createOrder(customerId, items, session) {
    const order = new Order({ customerId, items: [] });

    for (const item of items) {
      const product = await Product.findById(item.productId).session(session);
      if (!product || product.stock < item.quantity) {
        throw new Error('Product not available or insufficient stock');
      }
      product.stock -= item.quantity;
      await product.save({ session });

      order.items.push({
        productId: product._id,
        quantity: item.quantity,
        vendorId: product.vendorId,
      });
    }

    await order.save({ session });
    return order;
  }
}

const instance = new OrderService();
Object.freeze(instance);

export default instance;
