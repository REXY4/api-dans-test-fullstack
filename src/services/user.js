const {users} = require("../model")

const create = (data) => {
    const creteUser = users.create(data)
    const result = creteUser.then((res, err)=>{
        return Object.values(res)[0]
    })
    return result
};

const getBy = (option) => {
    const findUsers = users.findOne(option)
    const result = findUsers.then((res, err)=>{
        return Object.values(res)[0]
    })
    return  result
};

module.exports = {
  create,
  getBy,
};
