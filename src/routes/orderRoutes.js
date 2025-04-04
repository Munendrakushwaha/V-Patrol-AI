import express from 'express';
import { placeOrder } from '../controllers/orderController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Place a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: number
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Bad request
 */
router.post('/', protect, authorize('customer'), placeOrder);

export default router;

