import { makeExecutableSchema } from 'graphql-tools';
// import resolvers from './resolvers';
import typeDefs from './schemaStr';
const resolvers = {
  Query: {
    getFoods: () => {
      return [{
        _id: "ádas",
        title: "ádasdasd",
        link: "ádasasd"
      }]
    },
    getFood: (root, { id }) => {
      return {
        _id: "ádas",
        title: "ádasdasd",
        link: "ádasasd"
      }
    }
  }
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
