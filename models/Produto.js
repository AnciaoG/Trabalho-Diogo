module.exports = class Product {
  static async create(pool, title, description, price, storeId) {
    return pool.execute(
      'INSERT INTO products (title, description, price, store_id) VALUES (?, ?, ?, ?)',
      [title, description, price, storeId]
    );
  }

  static async findAll(pool) {
    return pool.execute('SELECT * FROM products');
  }

  static async deleteById(pool, id) {
    return pool.execute('DELETE FROM products WHERE id = ?', [id]);
  }
};
