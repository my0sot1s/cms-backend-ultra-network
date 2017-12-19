import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
// import { createTypeWithPagination } from 'graphql/utils'
import { StoriesType, StoriesInputType } from '../../types/Stories'
import Stories from '../../../models/mongo/Stories'

const mutation = {
  type: StoriesType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(StoriesInputType)
    }
  },
  resolve(root, params) {
    return Stories.findByIdAndUpdate(params.id, {
      $set: {
        ...params.data
      }
    })
      .then(data => Stories.findById(data.id).exec())
      .catch(err => new Error('Not Success'))
  }
}

export default mutation
