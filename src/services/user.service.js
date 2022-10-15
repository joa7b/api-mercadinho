const User = require('../models/User');

const findByEmailUserService = (email) => User.findOne({ email: email });

const findByUsernameUserService = (username) => User.findOne({ username: username });

const createUserService = (body) => User.create(body);

module.exports = {
  findByEmailUserService,
  findByUsernameUserService,
  createUserService,
};
