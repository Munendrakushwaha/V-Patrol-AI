import AnalyticsService from '../services/analyticsService.js';

export const getRevenuePerVendor = async (req, res) => {
  try {
    const revenue = await AnalyticsService.getRevenuePerVendor();
    res.json(revenue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTopProductsBySales = async (req, res) => {
  try {
    const topProducts = await AnalyticsService.getTopProductsBySales();
    res.json(topProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAverageOrderValue = async (req, res) => {
  try {
    const averageValue = await AnalyticsService.getAverageOrderValue();
    res.json({ averageOrderValue: averageValue });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDailySalesForVendor = async (req, res) => {
  try {
    const sales = await AnalyticsService.getDailySalesForVendor(req.user._id);
    res.json(sales);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLowStockItems = async (req, res) => {
  try {
    const lowStockItems = await AnalyticsService.getLowStockItems(req.user._id);
    res.json(lowStockItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Implement other analytics functions similarly
