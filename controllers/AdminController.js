const Product = require('../models/Produto.js');
const User = require('../models/User.js');

module.exports = {
  async dashboard(req, res) {
    try {
      const [products] = await Product.findAll();
      const [users] = await User.findAll();
      res.render('pages/admin', { products, users });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao carregar painel admin');
    }
  }
};
