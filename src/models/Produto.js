const mongooose = require('mongoose');

const ProdutoSchema = new mongooose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const UserSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: true,
  },
});

const Produto = mongooose.model('mercadinho-api.produtos', ProdutoSchema);
const User = mongooose.model('mercadinho-api.users', UserSchema);

module.exports = { Produto, User };
