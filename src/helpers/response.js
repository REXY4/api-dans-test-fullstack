const response = (message, data) => ({
  statusCode: 200,
  status: 'success',
  message,
  data : data
});

module.exports = response;
