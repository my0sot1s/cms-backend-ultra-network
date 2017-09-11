import { GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql'
import { BlogType, BlogInputType } from '../../types/Blog'
import Blog from '../../../models/Blog'
// import { pubsub } from '../../schema'
import { publishEvent } from '../../subscriptions'

export default {
  type: BlogType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(BlogInputType)
    }
  },
  resolve: async (root, params) => {
    var newBlog = new Blog(params.data)
    var doc = await newBlog.save()
    if (!doc) {
      return new Error('...Can\'n insert')
    }
    else {
      publishEvent('onSaveBlog', doc)
      return doc
    }
  }
}