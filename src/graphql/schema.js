import * as graphql from 'graphql'
import mutations from './mutations'
import queries from './queries'

export default new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),
  mutation: new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
  }),
})