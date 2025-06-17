const db = require('../config/Banco.js');

module.exports = class User {
  static async create(name, email, password, role) {
    return db.execute(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, password, role]
    );
  }

  static async findByEmail(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }
};