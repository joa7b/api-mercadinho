require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routesProdutos = require('./routes/produto.route');
const routesUser = require('./routes/user.route');
const connectToDatabase = require('./database/database');

const port = process.env.PORT || 3001;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/', routesProdutos);
app.use('/usuario', routesUser)


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
