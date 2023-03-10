const { name, author, description } = require('../package.json');

const {
  APP_PORT,
  APP_HOST,
} = process.env;

module.exports = {
  name,
  author,
  description,
  host: APP_HOST,
  port: APP_PORT,
};
