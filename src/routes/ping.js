const { ping } = require('../controllers');
const response = require('../helpers/response');

const moduleRouteDef = {
  basePath: '/api/v1/ping',
  description: 'Ping APIs',

  routes: [
    {
      active: true,
      method: 'get',
      path: '/',
      summary: 'Check Ping',
      description: 'Get Api Pings',
      action: [
        ping.getAll,
      ],
      validators: {},
      responseExamples: [response('Ping:OK', null)],
    },
  ],
};

module.exports = moduleRouteDef;
