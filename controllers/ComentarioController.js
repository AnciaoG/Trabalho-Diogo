const Comment = require('../models/Comentario.js');

module.exports = {
  async create(req, res) {
    const { user_id, product_id, comment, rating } = req.body;
    try {
      await Comment.create(user_id, product_id, comment, rating);
      res.redirect(`/products/${product_id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao enviar comentário');
    }
  },

  async showComments(req, res) {
    const productId = req.params.product_id;
    try {
      const [comments] = await Comment.findByProduct(productId);
      res.render('pages/comments', { comments });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar comentários');
    }
  }
};
