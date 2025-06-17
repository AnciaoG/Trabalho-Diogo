const db = require('../config/Banco.js');

module.exports = class Product {
  static async create(title, description, price, storeId) {
    return db.execute(
      'INSERT INTO products (title, description, price, store_id) VALUES (?, ?, ?, ?)',
      [title, description, price, storeId]
    );
  }

  static async findAll() {
    return db.execute('SELECT * FROM products');
  }

  static async deleteById(id) {
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  }
};