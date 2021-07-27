var fastify = require('fastify');
var path = require('path');
var debug = require('debug')('weather:app');
var app = require('./routes/index');

debug('--> Into the app.js')

// view engine setup
app.register(require('fastify-pug'), {views: 'views', filename: (view) => {
  return path.join(__dirname, 'views', view);
} });

// set up static routes
app.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
})

// initialize cookie and form support
app.register(require('fastify-cookie'));
app.register(require('fastify-formbody'));

// catch 404 and forward to error handler
app.setNotFoundHandler(function (req, reply) {
  reply.code(404).send({ error: 'Not Found', message: 'Four Oh Four 🤷‍♂️', statusCode: 404 })
})

module.exports = app;
