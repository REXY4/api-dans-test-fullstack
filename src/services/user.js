const { users, Sequelize } = require('../model')

const create = (data) => {
  const creteUser = users.create({
    ...data,
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
  })
  const result = creteUser.then((res, err) => Object.values(res)[0])
  return result
};

const getBy = (option) => {
  const findUsers = users.findOne(option)
  const result = findUsers.then((res, err) => {
    if (res === null) {
      return false
    }
    return Object.values(res)[0]
  })
  return result
};

module.exports = {
  create,
  getBy,
};
