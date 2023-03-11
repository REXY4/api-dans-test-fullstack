const { user : handler } = require('../controllers');
const response = require('../helpers/response');
const authentication = require('../middlewares/authentication');

const moduleRouteDef = {
  basePath: '/api/v1/user',
  description: 'User APIs',
  routes: [
    {
      active : true,
      method: 'get',
      path: '/login',
      summary: 'login',
      description: 'Login Api Pings',
      action: [
        handler.getByLogin,
      ],
      validators: {},
      responseExamples: [response('login success', null)],
    },
    {
        active : true,
        method: 'post',
        path: '/register',
        summary: 'login',
        description: 'register Api Users',
        action: [
          handler.create,
        ],
        validators: {},
        responseExamples: [response('Create user success', null)],
      },
      {
        active : true,
        method: 'get',
        path: '/check',
        summary: 'ceck user',
        description: 'check user',
        action: [
          authentication,
          handler.checkUser,
        ],
        validators: {},
        responseExamples: [response('Create user success', null)],
      },
  ],
};

module.exports = moduleRouteDef;
