'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _socket = require('socket.io');var _socket2 = _interopRequireDefault(_socket);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _models = require('./models');var models = _interopRequireWildcard(_models);

var _User = require('./models/User');var _User2 = _interopRequireDefault(_User);
var _controller = require('./controller');var _controller2 = _interopRequireDefault(_controller);
var _middleware = require('./middleware');
var _schema = require('./graphql/schema');var _schema2 = _interopRequireDefault(_schema);
var _subscriptions = require('./graphql/subscriptions');
var _expressGraphql = require('express-graphql');var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
var _graphql = require('graphql');
var _subscriptionsTransportWs = require('subscriptions-transport-ws');
var _graphqlServerExpress = require('graphql-server-express');function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server
console.log('Running...'); // import { socket } from './socket'
var app = (0, _express2.default)();
// const serve = http.Server(app)
// const io = ioSk(serve)
var PORT = process.env.PORT || 3001;
// let WS_PORT = process.env.PORT || 3002

//  ex https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11


// create server ws for graphql suubscrition

var wsServe = (0, _http.createServer)(app);


// subcription config for server

// const subscriptionServe = new SubscriptionServer({
//   subscriptionManager,
//   onConnect: async (connectParams) => {
//     console.log(`ws connect established ${connectParams}`)
//   },
// },
//   {
//     server: wsServe,
//     path: '/'
//   })


// ws listen path

// wsServe.listen(WS_PORT, () => {
//   console.log(`WS's listening at ${WS_PORT}`)
// })

//Set our static file directory to public
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
// help express can read param with ?
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(require('cors')());
//Allow CORS
app.all('*', _middleware.headerConfig);

app.use((0, _middleware.setPubsubMiddleware)(_subscriptions.pubsub));
app.get('/', function (req, res) {
  res.sendfile(_path2.default.join(__dirname, 'public/index.html'));
});

// api send with controller

var len = _controller2.default.length;
for (var i = 0; i < len; i++) {
  app.use('/api', _controller2.default[i]);
}
app.use('/graphql', _bodyParser2.default.json(), (0, _expressGraphql2.default)(function () {return {
    schema: _schema2.default,
    graphiql: true,
    pretty: true };}));


// new SubscriptionServer({
//   subscriptionManager,
//   onSubscribe: (msg, params) => {
//     debugger
//     return Object.assign({}, params, {});
//   }
// }, {
//     server: wsServe,
//     path: '/subscriptions'
//   })

_subscriptionsTransportWs.SubscriptionServer.create(
{
  schema: _schema2.default,
  execute: _graphql.execute,
  subscribe: _graphql.subscribe },

{
  server: wsServe,
  path: '/subscriptions' });



app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql',
  subscriptionEnpoint: 'ws://localhost:3001/subscriptions' }));



// app.get('/fb', (req, res) => {
//   res.sendfile(path.join(__dirname, 'public/fb.html'))
// })
// idiot
// app.get('/socket', (req, res) => {
//   res.sendfile(path.join(__dirname, 'public/socket.html'))
// })
wsServe.listen(PORT, function () {
  console.log('*** started at ' + PORT + ' ***');
});

// socket(io)