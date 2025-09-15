const Product = require('../models/Produto.js');

module.exports = {
  async showAll(req, res) {
    const pool = req.app.locals.db; // pega o pool do app
    try {
      const [products] = await Product.findAll(pool);
      res.render('pages/products', { products });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao carregar produtos');
    }
  },

  async create(req, res) {
    const pool = req.app.locals.db;
    const { title, description, price } = req.body;
    const storeId = req.body.store_id || 1; // Mock
    try {
      await Product.create(pool, title, description, price, storeId);
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao criar produto');
    }
  },

  async delete(req, res) {
    const pool = req.app.locals.db;
    const id = req.params.id;
    try {
      await Product.deleteById(pool, id);
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao deletar produto');
    }
  }
};
