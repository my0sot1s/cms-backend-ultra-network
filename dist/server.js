'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _cors = require('cors');var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
require('./models');
var _middlewares = require('./utils/middlewares');var _middlewares2 = _interopRequireDefault(_middlewares);
var _graphql = require('graphql');
var _expressSession = require('express-session');var _expressSession2 = _interopRequireDefault(_expressSession);
var _schema = require('./graphql/schema');var _schema2 = _interopRequireDefault(_schema);
var _passport = require('passport');var _passport2 = _interopRequireDefault(_passport);
var _nodeUuid = require('node-uuid');var _nodeUuid2 = _interopRequireDefault(_nodeUuid);
var _ejs = require('ejs');var _ejs2 = _interopRequireDefault(_ejs);
var _constants = require('./utils/constants');var cst = _interopRequireWildcard(_constants);
var _subscriptionsTransportWs = require('subscriptions-transport-ws');
var _graphqlServerExpress = require('graphql-server-express');function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}

// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server
// let PORT = process.env.PORT || 3001
//   , secret = `3223g41T/Kai0shin][Sama`
process.env.NODE_ENV = cst.PORT === cst.LOCAL_PORT ?
cst.DEVELOPMENT :
cst.PRODUCTION;

console.log('Running...' + process.env.NODE_ENV);
var app = (0, _express2.default)();
require("./utils/authenticate");
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, '../public/views')); // trỏ vào thư mục view để chứa các file template
// Note:ex at https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11

app.use("/dashboard", _express2.default.static(_path2.default.join(__dirname, '../public')));

app.use(require('cookie-parser')());
// Create sesstion
app.use((0, _expressSession2.default)({
    genid: function genid(req) {
        return _nodeUuid2.default.v4();
    },
    secret: cst.SESSION_SECRET,
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
app.all('*', _middlewares.headerMiddleware);

// app.all('*', middleware.)

// require("./rest").default(app, api, cors);

// map controller to deploy
// ready on start
require("./controllers").default.map(function (value) {
    app.use('/dashboard', (0, _cors2.default)(_middlewares.corsMiddleware), value);
});
// map api to deploy
// ready on start
require("./api").default.map(function (value) {
    app.use('/api', (0, _cors2.default)(_middlewares.corsMiddleware), Object.values(value)[0]);
});
// redirect to base.
app.get("/", function (req, res) {
    res.redirect("/dashboard");
});
// Note: deploy map graphql to express
// connect to !/graphiql in dev mode
app.use.apply(app, [
'/graphql'].concat(_toConsumableArray(_middlewares2.default), [

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
    process.env.NODE_ENV === cst.DEVELOPMENT ?
    cst.DEVELOPMENT_WS :
    cst.PRODUCTION_WSS }));


var wsServe = (0, _http.createServer)(app);


// Note: server using port 3001 in development
// work with socket
wsServe.listen(cst.PORT, function () {
    console.log('*** started at http://localhost:' + cst.PORT + ' ***');
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
    res.status(404).render("page-error");
});