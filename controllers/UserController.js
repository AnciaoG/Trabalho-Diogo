const User = require('../models/User.js');

module.exports = {
  async showLoginPage(req, res) {
    res.render('pages/login');
  },

  async showRegisterPage(req, res) {
    res.render('pages/register');
  },

  async register(req, res) {
    const { name, email, password, role } = req.body;
    try {
      await User.create(name, email, password, role);
      res.redirect('/login');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao cadastrar usuário');
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const [user] = await User.findByEmail(email);
      if (!user.length || user[0].password !== password) {
        return res.status(401).send('Login inválido');
      }
      // Simples sessão fake (pode melhorar com cookie-session, jwt, etc.)
      res.render('pages/dashboard', { user: user[0] });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao fazer login');
    }
  }
};