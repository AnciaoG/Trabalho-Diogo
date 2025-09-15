const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');
const initializeDatabase = require('./config/Banco.js');  // função que retorna o pool

initializeDatabase()
  .then(pool => {
    app.locals.db = pool; // GUARDA o pool aqui pra acessar em controllers

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static('public'));

    app.engine('handlebars', exphbs.engine());
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, 'views'));

    app.use('/', routes);

    app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
  })
  .catch(err => {
    console.error('Erro ao iniciar o banco:', err);
  });
