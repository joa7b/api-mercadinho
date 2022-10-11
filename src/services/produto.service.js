const Produto = require('../models/Produto');

const findProdutoService = async () => {
  const produtos = await Produto.find();
  return await produtos;
};

const findProdutoByIdService = async (id) => {
  return await Produto.find({ _id: id });
};

const createProdutoService = async (newProduto) => {
  const produto = new Produto(newProduto);
  return await produto.save();
};

const updateProdutoService = async (id, produtoEdited) => {
  //produtoEdited['_id'] = id;
  return await Produto.findOneAndUpdate({ _id: id }, produtoEdited, {
    new: true,
  });
};

const deleteProdutoService = async (id) => {
  return await Produto.findOneAndDelete({ _id: id });
};

module.exports = {
  findProdutoService,
  findProdutoByIdService,
  createProdutoService,
  updateProdutoService,
  deleteProdutoService,
};
