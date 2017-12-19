import { GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql'
import { FoodsType, FoodsInputType } from '../../types/Foods'
import Foods from '../../../models/mongo/Foods'
// import { pubsub } from '../../schema'
import { publishEvent } from '../../subscriptions'

const mutation = {
  type: FoodsType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(FoodsInputType)
    }
  },
  resolve: async (root, params) => {
    var newFood = new Foods(params.data)
    var doc = await newFood.save()
    if (!doc) {
      return new Error('...Can\'n insert')
    }
    else {
      publishEvent('onSaveFood', doc)
      return doc
    }
  }
}
export default mutation