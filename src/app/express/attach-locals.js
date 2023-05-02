/**
 * Makes the context set up on request available to the UI rendered on the server
 */
function attachLocals(req, res, next) {
  res.locals.context = req.context;

  next();
}

module.exports = attachLocals;