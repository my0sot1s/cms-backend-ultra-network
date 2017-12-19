import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
// import { createTypeWithPagination } from 'graphql/utils'
import { FoodsType, FoodsInputType } from '../../types/Foods'
import Foods from '../../../models/mongo/Foods'

const mutation = {
  type: FoodsType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(FoodsInputType)
    }
  },
  resolve(root, params) {
    return Foods.findByIdAndUpdate(params.id, {
      $set: {
        ...params.data
      }
    })
      .then(data => Foods.findById(data.id).exec())
      .catch(err => new Error('Not Success'))
  }
}

export default mutation
