const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produto.controller');
const userController = require('../controllers/user.controller');

router.get('/produtos', produtosController.findProdutoController);
router.get('/produtos/:id', produtosController.findProdutoByIdController);
router.post('/produtos/create', produtosController.createProdutoController);
router.put('/update/:id', produtosController.updateProdutoController);
router.delete('/delete/:id', produtosController.deleteProdutoController);

router.post('/cadastro/usuario', userController.createUserController);
router.get('/usuarios', userController.findUserController);

module.exports = router;
