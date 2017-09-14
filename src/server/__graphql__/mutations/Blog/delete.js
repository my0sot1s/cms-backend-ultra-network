import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { BlogType, BlogInputType } from '../../types/Blog'
import Blog from '../../../models/Blog'
import { publishEvent } from '../../subscriptions'

export default {
  type: BlogType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return Blog.findByIdAndRemove(params.id)
      .then(data => {
        var doc = { _id: params.id }
        publishEvent('onDeleteBlog', doc)
        return doc;
      })
      .catch(err => new Error('Not Success'))
  }
}
