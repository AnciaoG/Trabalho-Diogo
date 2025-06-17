// routes/index.js
const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const ProductController = require('../controllers/ProductController');
const ReservationController = require('../controllers/ReservationController');
const CommentController = require('../controllers/CommentController');
const AdminController = require('../controllers/AdminController');

// Autenticação
router.get('/login', AuthController.showLoginPage);
router.get('/register', AuthController.showRegisterPage);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Produtos
router.get('/products', ProductController.showAll);
router.get('/products/create', ProductController.showCreateForm);
router.post('/products/create', ProductController.create);
router.post('/products/delete/:id', ProductController.delete);

// Reservas
router.post('/reservations', ReservationController.reserve);
router.get('/reservations', ReservationController.showUserReservations);

// Comentários
router.post('/comments', CommentController.create);
router.get('/products/:product_id/comments', CommentController.showComments);

// Admin
router.get('/admin', AdminController.dashboard);

module.exports = router;
