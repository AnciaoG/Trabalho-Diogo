// routes/index.js
const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const AuthController = require('../controllers/UserController');
const ProductController = require('../controllers/ProdutoController');
const ReservationController = require('../controllers/ReservaController');
const CommentController = require('../controllers/ComentarioController');
const AdminController = require('../controllers/AdminController');

//Principal
router.get('/', HomeController.index);

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
