'use strict';Object.defineProperty(exports, "__esModule", { value: true });var middleware = exports.middleware = {
  cors: require('./corsMiddleware').default,
  graphql: require('./graphqlMiddleware').default,
  header: require('./headerMiddleware').default };