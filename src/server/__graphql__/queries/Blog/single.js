import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import { BlogType } from '../../types/Blog'
import Blog from '../../../models/Blog'

export default {
  type: BlogType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve(root, params) {
    return Blog.findById(params.id).exec()
  }
}
