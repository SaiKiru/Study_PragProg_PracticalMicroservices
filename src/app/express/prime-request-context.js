const uuid = require('uuid');

/**
 * Set up trace ID for each request made to the server
 */
function primeRequestContext(req, res, next) {
  req.context = {
    traceId: uuid(),
  };

  next();
}

module.exports = primeRequestContext;