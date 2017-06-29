import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
// import { createTypeWithPagination } from 'graphql/utils'
import { FoodsType, FoodsInputType } from '../../types/Foods'
import Foods from '../../../models/Foods'
// import { pubsub } from '../../subscriptions'
const mutation = {
  type: FoodsType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(FoodsInputType)
    }
  },
  resolve: async (root, params, { pubsub }) => {
    var newFood = new Foods(params.data)
    var doc = newFood.save()
    if (!doc) {
      return new Error('...Can\'n insert')
    }
    else {
      if (pubsub) {
        pubsub.publish('onSaveFood', doc);
      }
      return doc
    }
  }
}
export default mutation