const Product = require('../models/Produto.js');

module.exports = {
  async showAll(req, res) {
    const [products] = await Product.findAll();
    res.render('pages/products', { products });
  },

  async showCreateForm(req, res) {
    res.render('pages/createProduct');
  },

  async create(req, res) {
    const { title, description, price } = req.body;
    const storeId = req.body.store_id || 1; // Mock, usar session no real
    try {
      await Product.create(title, description, price, storeId);
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao criar produto');
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    try {
      await Product.deleteById(id);
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao deletar produto');
    }
  }
};
