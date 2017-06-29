import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'

export const StoryContentType = new GraphQLObjectType({
  name: 'StoryContentType',
  description: 'StoryContent Type',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    banner: { type: new GraphQLList(GraphQLString) },
    content: { type: new GraphQLList(GraphQLString) },
    images: { type: new GraphQLList(GraphQLString) },
    postId: {
      type: GraphQLID
    }
  })
})
export const StoryContentInputType = new GraphQLInputObjectType({
  name: 'StoryContentInputType',
  description: 'Create new StoyContent',
  fields: () => ({
    banner: { type: new GraphQLList(GraphQLString) },
    content: { type: new GraphQLList(GraphQLString) },
    images: { type: new GraphQLList(GraphQLString) },
    postId: {
      type: GraphQLID
    }
  })
})