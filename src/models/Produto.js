const mongooose = require('mongoose');

const ProdutoSchema = new mongooose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  measure: { type: String, required: true },
});

const Produto = mongooose.model('mercadinho-api.produtos', ProdutoSchema);

module.exports = Produto;
