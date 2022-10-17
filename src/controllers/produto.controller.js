const produtosService = require('../services/produto.service');

const findProdutoController = async (req, res) => {
  try {
    const allProdutos = await produtosService.findProdutoService();
    res.send(allProdutos);
  } catch (err) {
    res.status(400).json(err);
  }
};

const findProdutoByIdController = async (req, res) => {
  const idParam = req.params.id;
  try {
    const chosenProduto = await produtosService.findProdutoByIdService(idParam);
    res.send(chosenProduto);
  } catch (err) {
    res.status(400).json(err);
  }
};

const createProdutoController = async (req, res) => {
  const produto = req.body;

  if (
    !produto ||
    !produto.name ||
    !produto.description ||
    !produto.price ||
    !produto.image ||
    !produto.measure
  ) {
    return await res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  try {
    const novoProduto = await produtosService.createProdutoService(produto);
    res.status(201).send(novoProduto);
  } catch (err) {
    res.status(400).json(err);
  }
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
    !produtoEdit.image ||
    !produtoEdit.measure
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  try {
    const updateProduto = await produtosService.updateProdutoService(
      idParam,
      produtoEdit,
    );
    res.send(updateProduto);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteProdutoController = async (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return await res.status(400).send({ message: 'Id inválido.' });
  }

  try {
    const produtoService = await produtosService.deleteProdutoService(idParam);
    res.send({ message: 'Produto deletado.', produto: produtoService });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  findProdutoController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
