import * as graphql from 'graphql'
import mutations from './mutations'
import subscription from './subscriptions'
import queries from './queries'
// import { subscriptions } from './subscriptions'

export default new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),
  mutation: new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
  }),
  subscription: new graphql.GraphQLObjectType({
    name: 'Subscription',
    fields: subscription
  })
})