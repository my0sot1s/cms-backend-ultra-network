'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _cors = require('cors');var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
require('./models');
var _controller = require('./controller');var _controller2 = _interopRequireDefault(_controller);
var _index = require('./middleware/index');

var _graphql = require('graphql');
var _expressSession = require('express-session');var _expressSession2 = _interopRequireDefault(_expressSession);
var _passport = require('passport');var _passport2 = _interopRequireDefault(_passport);
var _nodeUuid = require('node-uuid');var _nodeUuid2 = _interopRequireDefault(_nodeUuid);


var _schema = require('./__graphql__/schema');var _schema2 = _interopRequireDefault(_schema);


var _subscriptionsTransportWs = require('subscriptions-transport-ws');
var _graphqlServerExpress = require('graphql-server-express');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}} // import schema from './graphql/schema'

// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server
var PORT = process.env.PORT || 3001,
secret = '3223g41T/Kai0shin][Sama';
process.env.NODE_ENV = PORT === 3001 ? 'development' : "production";
console.log('Running...' + process.env.NODE_ENV);
var app = (0, _express2.default)();
require("./auth");
// Note:ex at https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11
// create server ws for graphql suubscrition
// Set our static file directory to public
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/admin')));
// app.use(express.static(path.join(__dirname, '../admin')));
app.use(require('cookie-parser')());
// Create sesstion
app.use((0, _expressSession2.default)({
  genid: function genid(req) {
    return _nodeUuid2.default.v4();
  },
  secret: secret,
  proxy: true,
  resave: true,
  saveUninitialized: true }));


// end session

// help express can read param with ?
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cors2.default)());
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());
//Allow CORS
app.all('*', _index.middleware.header);

// app.all('*', middleware.)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../admin/blank-page.html'))
// })
app.get('/test', function (req, res) {
  if (req.isAuthenticated())
  res.send("Login");else
  res.send("Chưa login mà");
});
app.route("/login").
get(function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '/public/login.html'));
}).
post(_passport2.default.authenticate('local',
{
  failureRedirect: '/login',
  successRedirect: '/' }));


app.get('/create-blog', function (req, res) {
  if (req.isAuthenticated()) {
    res.sendFile(_path2.default.join(__dirname, '/public/blog.html'));
  } else {
    res.sendFile(_path2.default.join(__dirname, '/public/login.html'));
  }
});

// Note: Load all controllers is a array.
// router uri: api/{router_name}
var len = _controller2.default.length;
for (var i = 0; i < len; i++) {
  app.use('/api', (0, _cors2.default)(_index.middleware.cors), _controller2.default[i]);
}

// Note: deploy map graphql to express
// connect to !/graphiql in dev mode
app.use.apply(app, [
'/graphql'].concat(_toConsumableArray(
_index.middleware.graphql), [
(0, _graphqlServerExpress.graphqlExpress)(function (req) {
  // https://github.com/graphql/express-graphql/blob/3fa6e68582d6d933d37fa9e841da5d2aa39261cd/src/index.js#L257
  var query = req.query.query || req.body.query;
  if (query && query.length > 2000) {
    // None of our app's queries are this long
    // Probably indicates someone trying to send an overly expensive query
    throw new Error('Query too large.');
  }
  return {
    schema: _schema2.default };

})]));

// app.use('/graphql', ...middleware.graphql, graphqlExpress({ schema: _schema }));
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql',
  subscriptionsEndpoint:
  process.env.NODE_ENV === 'development' ? 'ws://localhost:3001/subscriptions' : 'wss://baseserver.herokuapp.com/subscriptions' }));






var wsServe = (0, _http.createServer)(app);


// Note: server using port 3001 in development
// work with socket
wsServe.listen(PORT, function () {
  console.log('*** started at ' + PORT + ' ***');
  console.log('+*******************************+');
  // Note: Deploy subscription server
  // work with websocket at: ws://localhost:3001/subscriptions of course work with dev model
  // subscripts to recieve broadcast
  new _subscriptionsTransportWs.SubscriptionServer({
    execute: _graphql.execute,
    subscribe: _graphql.subscribe,
    schema: _schema2.default },
  {
    server: wsServe,
    path: '/subscriptions' });

});

app.get("*", function (req, res) {
  res.status(404).sendFile(_path2.default.join(__dirname, '/public/page-error.html'));
});