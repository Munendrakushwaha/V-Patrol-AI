import mongoose from 'mongoose';
import OrderService from '../services/orderService.js';

export const placeOrder = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { items } = req.body;
    const order = await OrderService.createOrder(req.user._id, items, session);
    await session.commitTransaction();
    res.status(201).json(order);
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ message: error.message });
  } finally {
    session.endSession();
  }
};
