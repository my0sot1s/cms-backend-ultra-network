import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { StoryContentType } from './StoryContent'
import StoryContent from '../../models/StoryContent'

export const StoriesType = new GraphQLObjectType({
  name: 'Stories',
  description: 'Stories Type',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    titles: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    begin: {
      type: GraphQLString,
    },
    views: {
      type: GraphQLInt
    },
    liked: {
      type: GraphQLInt
    },
    userId: {
      type: GraphQLID
    },
    banner: { type: new GraphQLList(GraphQLString) },
    content: {
      type: new GraphQLList(StoryContentType),
      resolve(story) {
        const { _id } = story
        let res = StoryContent.find({ postId: _id }).exec()
        if (!res) return new Error('No story')
        else return res
      }
    }
  }
})
export const StoriesInputType = new GraphQLInputObjectType({
  name: 'StoriesInput',
  description: 'Create New Story',
  fields: {
    titles: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    begin: {
      type: GraphQLString,
    },
    views: {
      type: GraphQLInt
    },
    liked: {
      type: GraphQLInt
    },
    userId: {
      type: GraphQLID
    },
    banner: { type: new GraphQLList(GraphQLString) }
  }
})