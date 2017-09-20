'use strict';Object.defineProperty(exports, "__esModule", { value: true });var bodyParser = require('body-parser');
var jwt = require("jsonwebtoken");
var whitelist = ['baseserver.herokuapp.com', 'localhost:3001', 'localhost:3002'];

/**
                                                                                   * 
                                                                                   * @param {Object} req 
                                                                                   * @param {function} callback 
                                                                                   */
var corsMiddleware = exports.corsMiddleware = function corsMiddleware(req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true // reflect (enable) the requested origin in the CORS response
        };} else {
        corsOptions = { origin: false // disable CORS for this request
        };}
    callback(null, corsOptions); // callback expects two parameters: error and options
};
/**
    * 
    * @param {object} req 
    * @param {object} res 
    * @param {function} next 
    */
var headerMiddleware = exports.headerMiddleware = function headerMiddleware(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE,OPTIONS');
    res.set('Access-Control-Expose-Headers', 'Content-Length');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
};
/**
    * 
    * @param {object} req 
    * @param {object} res 
    * @param {function} next 
    */
var authenMiddleware = exports.authenMiddleware = function authenMiddleware(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/dashboard/login');
    } else {
        next();
    }
};
/**
    * 
    * @param {object} req 
    * @param {object} res 
    * @param {function} next 
    */
var tokenMiddleware = exports.tokenMiddleware = function tokenMiddleware(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token)
    jwt.verify(token, require("../utils/constants").STATIC_SECRET_TOKEN, function (err, decoded) {
        if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
            // if everything is good, save to request for use in other routes
            debugger;
            req.decoded = decoded;
            next();
        }
    });else

    return res.status(403).send({
        success: false,
        message: 'No token provided.' });

};exports.default =

[
bodyParser.json(),
bodyParser.text({ type: 'application/graphql' }),
function (req, res, next) {
    if (req.is('application/graphql')) {
        req.body = { query: req.body };
    }
    next();
}];