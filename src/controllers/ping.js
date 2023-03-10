const exception = require('../exceptions/exceptions');
const response = require('../helpers/response');

const getAll = (req, res) => {
  try {
    res
      .status(200)
      .send(response('PING:OK', null));
  } catch (error) {
    res
      .status(500)
      .send(exception(500, 'error', error.message));
  }
};

module.exports = {
  getAll,
};
