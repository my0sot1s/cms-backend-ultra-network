import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { StoryContentType } from '../../types/StoryContent'
import StoryContent from '../../../models/StoryContent'

export default {
  type: new GraphQLList(StoryContentType),
  resolve() {
    const content = StoryContent.find().exec()
    if (!content)
      return new Error('No items....')
    else
      return content
  }
}
