import { makeExecutableSchema } from 'graphql-tools';
import resolvers, { typeDefs } from './execution'
// console.log(typeDefs)
// Note: generate schema from typeDef and resolver
// tạo schemas
export default makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: (e) => console.log(e) }
});
