const mongooose = require('mongoose');

const ProdutoSchema = new mongooose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Produto = mongooose.model('mercadinho-api.produtos', ProdutoSchema);

module.exports = Produto;
