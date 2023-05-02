const express = require('express');
const { join } = require('path');

const moundMiddleware = require('./mount-middleware');
const mountRoutes = require('./mount-routes');

function createExpressApp({ config, env }) {
  const app = express();

  // Configure PUG
  app.set('views', join(__dirname, '..'));
  app.set('view engine', 'pug');

  moundMiddleware(app, env);
  mountRoutes(app, config);

  return app;
}

module.exports = createExpressApp;