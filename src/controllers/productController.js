import ProductService from '../services/productService.js';

export const createProduct = async (req, res) => {
  try {
    const { name, price, stock, category } = req.body;
    const product = await ProductService.createProduct({
      name,
      price,
      stock,
      category,
      vendorId: req.user._id,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const product = await ProductService.updateProduct(id, updates);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.deleteProduct(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Implement updateProduct, deleteProduct similarly
