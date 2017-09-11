import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql'
import { BlogType } from '../../types/Blog'
import Blog from '../../../models/Blog'

export default {
  type: new GraphQLList(BlogType),
  args: {
    page: {
      type: GraphQLInt
    },
    limit: {
      type: GraphQLInt
    }
  },
  resolve(root, params) {
    const { page, limit } = params
    let _page = !page || isNaN(page) ? 0 : page
    let _limit = !limit || isNaN(limit) ? 5 : limit
    let _skip = _limit * _page
    const blog = Blog
      .find()
      .sort()
      .skip(_skip)
      .limit(_limit).exec()
    if (!blog)
      return new Error('No items....')
    else
      return blog
  }
}