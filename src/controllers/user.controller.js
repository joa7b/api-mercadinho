const userService = require('../services/user.service');

const createUserController = async (req, res) => {
  const { username, name, email, password, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  const foundUserEmail = await userService.findByEmailUserService(email);

  if (foundUserEmail) {
    res.status(400).send({ message: 'Esse email já existe.' });
  }

  const foundUserUsername = await userService.findByUsernameUserService(
    username,
  );

  if (foundUserUsername) {
    res.status(400).send({ message: 'Esse nome de usuário já existe.' });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    res.status(400).send({ message: 'Erro ao criar usuário.' });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  res.send({ message: 'findAll ok!' });
};

module.exports = {
  createUserController,
  findAllUserController,
};
