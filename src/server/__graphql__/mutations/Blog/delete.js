import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { BlogType, BlogInputType } from '../../types/Blog'
import Blog from '../../../models/Blog'

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
      .then(data => Blog.findById(data.id).exec())
      .catch(err => new Error('Not Success'))
  }
}
