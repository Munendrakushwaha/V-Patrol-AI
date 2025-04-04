// src/routes/analyticsRoutes.js
import express from 'express';
import {
  getRevenuePerVendor,
  getTopProductsBySales,
  getAverageOrderValue,
  getDailySalesForVendor,
  getLowStockItems,
} from '../controllers/analyticsController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/analytics/revenue:
 *   get:
 *     summary: Get revenue per vendor
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Revenue data retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/revenue', protect, authorize('admin'), getRevenuePerVendor);

/**
 * @swagger
 * /api/analytics/top-products:
 *   get:
 *     summary: Get top products by sales
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Top products data retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/top-products', protect, authorize('admin'), getTopProductsBySales);

/**
 * @swagger
 * /api/analytics/average-order-value:
 *   get:
 *     summary: Get average order value
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Average order value retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/average-order-value', protect, authorize('admin'), getAverageOrderValue);

/**
 * @swagger
 * /api/analytics/daily-sales:
 *   get:
 *     summary: Get daily sales for vendor
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daily sales data retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/daily-sales', protect, authorize('vendor'), getDailySalesForVendor);

/**
 * @swagger
 * /api/analytics/low-stock:
 *   get:
 *     summary: Get low stock items for vendor
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Low stock items retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/low-stock', protect, authorize('vendor'), getLowStockItems);

// Add routes for other analytics

export default router;