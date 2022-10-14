require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routesProdutos = require('./src/routes/produto.route');
const routesUser = require('./src/routes/user.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3001;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/', routesProdutos);
app.use('/users', routesUser);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
