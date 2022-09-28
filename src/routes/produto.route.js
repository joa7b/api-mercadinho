const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produto.controller');


router.get('/produtos', produtosController.findProdutoController);
router.get('/produtos/:id', produtosController.findProdutoByIdController);
router.post('/produtos/create', produtosController.createProdutoController);
router.put('/update/:id', produtosController.updateProdutoController);
router.delete('/delete/:id', produtosController.deleteProdutoController);


module.exports = router;
