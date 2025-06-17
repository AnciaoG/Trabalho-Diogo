const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));