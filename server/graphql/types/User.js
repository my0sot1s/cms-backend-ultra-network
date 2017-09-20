import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User Type',
  fields: () => ({
    // _id: {
    //   type: new GraphQLNonNull(GraphQLID),
    // },
    username: {
      type: GraphQLString,
    },
    cause: {
      type: GraphQLString,
    },
    login: {
      type: GraphQLString,
    },
    access_token: {
      type: GraphQLString,
    }
    // passWord: {
    //   type: GraphQLString,
    // },
    // displayName: {
    //   type: GraphQLString
    // },
    // email: {
    //   type: GraphQLString
    // }
  })
})