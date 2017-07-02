export const middleware = {
  cors: require('./corsMiddleware').default,
  graphql: require('./graphqlMiddleware').default,
  header: require('./headerMiddleware').default,
}