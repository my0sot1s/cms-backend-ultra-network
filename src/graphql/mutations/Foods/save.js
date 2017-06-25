import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
// import { createTypeWithPagination } from 'graphql/utils'
import { FoodsType, FoodsInputType } from '../../types/Foods'
import Foods from '../../../models/Foods'

const mutation = {
  type: FoodsType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(FoodsInputType)
    }
  },
  resolve(root, params) {
    var newFood = new Foods(params.data)
    var doc = newFood.save()
    if (!doc) {
      return new Error('...Can\'n insert')
    }
    else return doc
  }
}
export default mutation