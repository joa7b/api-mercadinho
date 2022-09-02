require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/produto.route');
const connectToDatabase = require('./database/database');

const port = process.env.PORT || 3001;
const app = express();

require("dotenv").config();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/', routes);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
