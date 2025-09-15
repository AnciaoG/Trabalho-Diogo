// controllers/HomeController.js
const Product = require('../models/Produto');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const [products] = await Product.findAll();
      const [users] = await User.findAll();

      // filtrar apenas lojistas
      const stores = users.filter(user => user.role === 'lojista');

      // embaralhar para exibir aleatoriamente
      const shuffledProducts = products.sort(() => 0.5 - Math.random()).slice(0, 6);
      const shuffledStores = stores.sort(() => 0.5 - Math.random()).slice(0, 4);

      res.render('pages/home', {
        products: shuffledProducts,
        stores: shuffledStores
      });
    } catch (err) {
  console.error('Erro REAL:', err); // ADICIONA ISSO
  res.status(500).send('Erro ao carregar a tela inicial');
    }
  }
};
