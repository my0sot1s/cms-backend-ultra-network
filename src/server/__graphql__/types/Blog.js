import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

export const BlogType = new GraphQLObjectType({
  name: 'Blog',
  description: 'Blog Type',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    link: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    tag: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    dateCreate: {
      type: GraphQLString
    }
  })
})
export const BlogInputType = new GraphQLInputObjectType({
  name: 'BlogInput',
  description: 'Create New Blog',
  fields: () => ({
    link: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    tag: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    dateCreate: {
      type: GraphQLString
    }
  })
})