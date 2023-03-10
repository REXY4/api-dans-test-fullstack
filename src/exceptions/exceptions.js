const exception = (statusCode, status, message) => ({
  statusCode,
  status,
  message,
});

module.exports = exception;
