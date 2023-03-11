const { getReasonPhrase } = require('http-status-codes')
const joi = require('joi');

const id = joi.number().integer().required().min(1)

const base = {
  name: joi.string().required().example('jhon doe'),
  email: joi.string().email().required().example('jhon@gmail.com'),
  password: joi.string().min(8).required()
};

const body = joi.object().id('UserBody').keys({ ...base })

const row = joi.object().id('UserRow').keys({ id, ...base })

const params = joi.object().id('UserParams').keys({ id })

const response = joi.object().id('UserResponse').keys({
  code: joi.number().required().allow(200).example(200),
  status: joi.string().required().allow(getReasonPhrase(200)).example(getReasonPhrase(200)),
  messages: joi.array().min(0).required().allow(null)
    .items(joi.link('#Message')),
  data: joi.object().keys({
    count: joi.number().required().min(0).example(99),
    rows: joi.array().min(0).required().allow(null)
      .items(row)
  })
})

module.exports = {
  body,
  row,
  params,
  response
}
