const exception = require('../exceptions/exceptions');

const { ping: pingService } = require('../services');

const getAll = (req, res) => {
  try {
    res
      .status(200)
      .send(pingService.checkAll());
  } catch (error) {
    res
      .status(500)
      .send(exception(500, 'error', error.message));
  }
};

module.exports = {
  getAll,
};
