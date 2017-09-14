'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _passport = require('passport');var _passport2 = _interopRequireDefault(_passport);
var _nodeUuid = require('node-uuid');var _nodeUuid2 = _interopRequireDefault(_nodeUuid);
var _ejs = require('ejs');var _ejs2 = _interopRequireDefault(_ejs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var path = require("path");

var authenMiddleware = function authenMiddleware(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  } else {
    next();
  }
};exports.default =

function (app, controller, cors, middleware) {
  app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, 'public/index.html'))
    res.render("index.ejs");
  });
  app.get('/graphql', authenMiddleware, function (req, res) {
    res.render("graphql.ejs");
  });
  app.get('/create-blog', authenMiddleware, function (req, res) {
    res.render("blog.ejs");
  });
  app.get('/socket', authenMiddleware, function (req, res) {
    res.render("socket.ejs");
  });
  app.get('/facebook-dev', authenMiddleware, function (req, res) {
    res.render("facebook.ejs");
  });



  app.get('/test', function (req, res) {
    if (req.isAuthenticated())
    res.send("Login");else
    res.send("Chưa login mà");
  });
  app.route("/login").
  get(function (req, res) {
    res.render("login.ejs");
  }).
  post(_passport2.default.authenticate('local',
  {
    failureRedirect: '/login',
    successRedirect: '/' })

  // (req, res) => {
  //   res.redirect('/');
  // }
  );
  app.get("/logout", function (req, res, next) {
    req.logout();
    req.session.save(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/login');
    });
  });


  // Note: Load all controllers is a array.
  // router uri: api/{router_name}
  var len = controller.length;
  for (var i = 0; i < len; i++) {
    app.use('/api', cors(middleware.cors), controller[i]);
  }
};