import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
// import { createTypeWithPagination } from 'graphql/utils'
import { StoryContentType, StoryContentInputType } from '../../types/StoryContent'
import Content from '../../../models/StoryContent'

const mutation = {
  type: StoryContentType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(StoryContentInputType)
    },
  },
  resolve(root, params) {
    var newContent = new Content(params.data)
    var doc = newContent.save()
    if (!doc) {
      return new Error('...Can\'n insert')
    }
    else return doc
  }
}
export default mutation