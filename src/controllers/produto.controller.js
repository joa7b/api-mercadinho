const produtosService = require('../services/produto.service');

const findProdutoController = async (req, res) => {
  const allProdutos = await produtosService.findProdutoService();
  res.send(allProdutos);
};

const findProdutoByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenProduto = await produtosService.findProdutoByIdService(idParam);
  res.send(chosenProduto);
};

const createProdutoController = async (req, res) => {
  const produto = req.body;

  if (
    !produto ||
    !produto.name ||
    !produto.description ||
    !produto.price ||
    !produto.quantity
  ) {
    return await res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  const novoProduto = await produtosService.createProdutoService(produto);
  res.send(novoProduto);
};

const updateProdutoController = async (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return await res.status(400).send({ message: 'Id inválido.' });
  }

  const produtoEdit = req.body;

  if (
    !produtoEdit ||
    !produtoEdit.name ||
    !produtoEdit.price ||
    !produtoEdit.description ||
    !produtoEdit.quantity
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  const updateProduto = await produtosService.updateProdutoService(
    idParam,
    produtoEdit,
  );
  res.send(updateProduto);
};

const deleteProdutoController = async (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return await res.status(400).send({ message: 'Id inválido.' });
  }

  const produtoService = await produtosService.deleteProdutoService(idParam);
  res.send({ message: 'Personagem deletado.' });
};

module.exports = {
  findProdutoController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
