const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});