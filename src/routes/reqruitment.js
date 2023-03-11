const { reqruitment: handler } = require('../controllers');
const response = require('../helpers/response');
const authentication = require('../middlewares/authentication');

const moduleRouteDef = {
  basePath: '/api/v1/reqruitment',
  description: 'Reqruitment APIs',

  routes: [
    {
      active: true,
      method: 'get',
      path: '/',
      summary: 'Check Recruitment',
      description: 'Get Api Recruitment',
      action: [
        authentication,
        handler.getAll,
      ],
      validators: {},
      responseExamples: [response('Ping:OK', null)],
    },
    {
      active: true,
      method: 'get',
      path: '/:id',
      summary: 'Check Recruitment',
      description: 'Get Api Recruitment',
      action: [
        authentication,
        handler.getBy,
      ],
      validators: {},
      responseExamples: [response('Ping:OK', null)],
    },
  ],
};

module.exports = moduleRouteDef;
