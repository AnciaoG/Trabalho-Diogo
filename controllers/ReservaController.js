const Reservation = require('../models/Reserva.js');

module.exports = {
  async reserve(req, res) {
    const { user_id, product_id, quantity } = req.body;
    try {
      await Reservation.create(user_id, product_id, quantity);
      res.redirect('/reservations');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao reservar produto');
    }
  },

  async showUserReservations(req, res) {
    const userId = req.query.user_id || 1;
    try {
      const [reservations] = await Reservation.findByUser(userId);
      res.render('pages/reservations', { reservations });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao carregar reservas');
    }
  }
};
