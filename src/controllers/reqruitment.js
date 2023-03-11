const exception = require('../exceptions/exceptions');
const response = require('../helpers/response');
const { recruitment: reqService } = require('../services')

const getAll = async (req, res) => {
  try {
    const result = await reqService.getAll(req.query);
    res.send(response('get all dat success', result));
  } catch (err) {
    res.status(500).send(
      exception(500, 'error', 'internal server error')
    )
  }
}

const getBy = async (req, res) => {
  try {
    const result = await reqService.getBy(req.params.id);
    res.send(response('get all dat success', result));
  } catch (err) {
    res.status(500).send(
      exception(500, 'error', 'internal server error')
    )
  }
}

module.exports = {
  getAll,
  getBy
}
