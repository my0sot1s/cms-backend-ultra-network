import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { StoriesType } from '../../types/Stories'
import Stories from '../../../models/Stories'

export default {
  type: new GraphQLList(StoriesType),
  resolve() {
    const stories = Stories.find().exec()
    if (!stories)
      return new Error('No items....')
    else
      return stories
  }
}