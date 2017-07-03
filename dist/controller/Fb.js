'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var getInfor = function () {var _ref = (0, _asyncToGenerator3.default)(regeneratorRuntime.mark(








  function _callee(_body) {var promises, arr, len, i, ii;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            promises = function promises(id) {
              return new _promise2.default(function (resolve, reject) {
                var link = '' + url + id + '?fields=id,name,gender,about,birthday,link,picture,email&type=large&access_token=' + access_token;
                (0, _request2.default)(link, function (err2, res2, body2) {
                  if (!err2 && res2 && res2.statusCode === 200) {
                    resolve(JSON.parse(body2, null, 2));
                  } else {
                    reject(err2);
                  }
                });
              });
            };
            arr = [];
            len = _body.data.length;
            i = 0;case 4:if (!(i < len)) {_context.next = 12;break;}_context.next = 7;return (
              promises(_body.data[i].id));case 7:ii = _context.sent;
            arr.push(ii);case 9:i++;_context.next = 4;break;case 12:return _context.abrupt('return',

            arr);case 13:case 'end':return _context.stop();}}}, _callee, this);}));return function getInfor(_x) {return _ref.apply(this, arguments);};}();



// https://graph.facebook.com/v2.9/1632062990381722/members?limit=10&access_token=125391211209683|oCDtzfS1snnja0vN0fyYQE7uFeo
var _express = require('express');var _express2 = _interopRequireDefault(_express);var _request = require('request');var _request2 = _interopRequireDefault(_request);var _promise = require('promise');var _promise2 = _interopRequireDefault(_promise);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var router = _express2.default.Router(); // https://graph.facebook.com/oauth/access_token?client_id=125391211209683&client_secret=8c36675ad46eca0e3f85ae2469a9d82c&grant_type=client_credentials
var access_token = "125391211209683|oCDtzfS1snnja0vN0fyYQE7uFeo";var url = 'https://graph.facebook.com/v2.9/';router.get('/fb/:id', function (req, res) {var limit = Number(req.query.limit) || 5;
  var id = Number(req.params.id);
  (0, _request2.default)('' + url + id + '/members?limit=' + limit + '&access_token=' + access_token, function (error, response, body) {
    if (!error && response && response.statusCode === 200) {
      var _body = JSON.parse(body);

      // see at:https://developers.facebook.com/docs/graph-api/reference/user/ 

      getInfor(_body).then(function (array) {
        res.json(array);
      }).catch(function (err) {
        res.send({ err: err });
      });


    } else
    res.send({ error: error });
  });
});exports.default =

router;