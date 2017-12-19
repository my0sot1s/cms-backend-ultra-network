import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'
import { FoodsType } from '../../types/Foods'
import Foods from '../../../models/mongo/Foods'

export default {
  type: new GraphQLList(FoodsType),
  args: {
    page: {
      type: GraphQLInt
    },
    access_token: {
      type: GraphQLString
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
    const foods = Foods.find().sort({ dateCreate: -1 }).skip(_skip).limit(_limit).exec()
    if (!foods)
      return new Error('No items....')
    else
      return foods
  }
}