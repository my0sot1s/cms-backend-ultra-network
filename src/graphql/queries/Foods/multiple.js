import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { FoodsType } from '../../types/Foods'
import Foods from '../../../models/Foods'

const query = {
  type: new GraphQLList(FoodsType),
  resolve() {
    const foods = Foods.find().exec()
    if (!foods)
      return new Error('No items....')
    else
      return foods
  }
}

export default query