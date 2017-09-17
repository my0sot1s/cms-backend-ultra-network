import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import { FoodsType } from '../../types/Foods'
import Foods from '../../../models/Foods'

export default {
  type: FoodsType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve(root, params) {
    return Foods.findById(params.id).exec()
  }
}
