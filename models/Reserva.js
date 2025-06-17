const db = require('../config/Banco.js');

module.exports = class Reservation {
  static async create(userId, productId, quantity) {
    return db.execute(
      'INSERT INTO reservations (user_id, product_id, quantity) VALUES (?, ?, ?)',
      [userId, productId, quantity]
    );
  }

  static async findByUser(userId) {
    return db.execute(
      'SELECT * FROM reservations WHERE user_id = ?',
      [userId]
    );
  }
};