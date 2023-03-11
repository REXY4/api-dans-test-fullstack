const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('../helpers/response')
const exception = require('../exceptions/exceptions');
const { user: userService } = require('../services')

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await userService.getBy({
      where: { email }
    });
    if (findUser) {
      return res.status(400).send(exception(500, 'failed', 'Email & Password already exist'))
    }
    const saltOFRound = 10;
    const hash = await bcrypt.hash(password, saltOFRound);
    const data = {
      name,
      email,
      password: hash
    }
    const creteUser = await userService.create(data);
    res.send(
      response('Create user success!', creteUser)
    )
  } catch (err) {
    res.status(500).send(
      exception(500, 'error', err.message),
    );
  }
};

const getByLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUserByEmail = await userService.getBy({
      where: { email }
    });
    if (!findUserByEmail) {
      return res.status(400).send(exception(400, 'failed', 'email and password wrong'))
    }
    const validPassword = await bcrypt.compare(password, findUserByEmail.password);
    if (!validPassword) {
      return res.status(400).send(exception(400, 'failed', 'ema and password  wrong'))
    }
    const result = await userService.getBy({
      where: { email: 'jhondoe@gmail.com' },
      attributes: {
        exclude: ['password']
      }
    });
    const token = await jwt.sign({ id: result.id }, process.env.SECRET_KEY)
    res.send(response('User login Success', { ...result, token }))
  } catch (err) {
    res.status(500).send(
      exception(500, 'error', err.message),
    );
  }
};

const checkUser = async (req, res) => {
  const findUserById = await userService.getBy({
    where: { id: req.id },
    attributes: {
      exclude: ['password']
    }
  });
  if (!findUserById) {
    res.status(400).send(exception(500, 'failed', 'Users not found!'))
  }
  res.send(
    response('Check User Success', findUserById)
  )
}

module.exports = {
  create,
  getByLogin,
  checkUser
};
