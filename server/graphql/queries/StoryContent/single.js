import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import { StoriesType } from '../../types/Stories'
import Stories from '../../../models/mongo/Stories'

export default {
  type: StoriesType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve(root, params) {
    return Stories.findById(params.id).exec()
  }
}