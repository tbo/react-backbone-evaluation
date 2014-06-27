'use strict';

var path        = require('path');
var url         = require('url');
var express     = require('express');
var bodyParser = require('body-parser')
var browserify  = require('connect-browserify');
var ReactAsync  = require('react-async');
var nodejsx     = require('node-jsx').install();
var App         = require('./app');

var development = process.env.NODE_ENV !== 'production';

function renderApp(req, res, next) {
  var path = url.parse(req.url).pathname;
  var app = App({path: path});
  ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
    if (err) {
      return next(err);
    }
    res.send('<!doctype html>\n' + markup);
  });
}

var basketId = 4;
var api = express()
  .get('/products/:id', function(req, res) {
    var id = req.params.id;
    res.sendfile(id + '.json', {root: './public/products/'});
  })
  .get('/basket/', function(req, res) {
    var id = req.params.id;
    res.sendfile('basket.json', {root: './public/'});
  })
  .post('/basket/', function(req, res) {
      console.log('New basket item: ', req.body.name);
      var basketItem = req.body;
      basketItem.id = basketId++;
      res.send(basketItem);
  });

var app = express();

if (development) {
  app.get('/assets/bundle.js',
    browserify('./app', {
      debug: true,
      watch: true
    }));
}

app
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .use(bodyParser.json())
  .use('/api', api)
  .use(renderApp)
  .listen(3000, function() {
    console.log('Point your browser at http://localhost:3000');
  });
