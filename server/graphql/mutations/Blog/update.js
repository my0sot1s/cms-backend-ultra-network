import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
// import { createTypeWithPagination } from 'graphql/utils'
import { BlogType, BlogInputType } from '../../types/Blog'
import Blog from '../../../models/Blog'
import { publishEvent } from '../../subscriptions'

export default {
  type: BlogType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(BlogInputType)
    }
  },
  resolve(root, params) {
    return Blog.findByIdAndUpdate(params.id, {
      $set: {
        ...params.data
      }
    })
      .then(async data => {
        var doc = await Blog.findById(data.id).exec();
        publishEvent('onUpdateBlog', doc)
        return doc;
      })
      .catch(err => new Error('Not Success'))
  }
}
