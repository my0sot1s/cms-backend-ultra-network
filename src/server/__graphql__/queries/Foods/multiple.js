import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql'
import { FoodsType } from '../../types/Foods'
import Foods from '../../../models/Foods'

const query = {
  type: new GraphQLList(FoodsType),
  args: {
    page: {
      type: GraphQLInt
    },
    limit: {
      type: GraphQLInt
    }
  },
  resolve(root, params) {
    const { page, limit } = params
    let _page = !page || isNaN(page) ? 0 : page
    let _limit = !limit || isNaN(limit) ? 5 : limit
    let _skip = _limit * _page
    const foods = Foods.find().sort().skip(_skip).limit(_limit).exec()
    if (!foods)
      return new Error('No items....')
    else
      return foods
  }
}

export default query