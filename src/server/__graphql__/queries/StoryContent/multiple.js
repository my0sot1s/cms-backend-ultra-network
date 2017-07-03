import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { StoryContentType } from '../../types/StoryContent'
import StoryContent from '../../../models/StoryContent'

const query = {
  type: new GraphQLList(StoryContentType),
  resolve() {
    const content = StoryContent.find().exec()
    if (!content)
      return new Error('No items....')
    else
      return content
  }
}

export default query