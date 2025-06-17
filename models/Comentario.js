const db = require('../config/Banco.js');

module.exports = class Comment {
  static async create(userId, productId, comment, rating) {
    return db.execute(
      'INSERT INTO comments (user_id, product_id, comment, rating) VALUES (?, ?, ?, ?)',
      [userId, productId, comment, rating]
    );
  }

  static async findByProduct(productId) {
    return db.execute('SELECT * FROM comments WHERE product_id = ?', [productId]);
  }
};