import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql'
// import { createTypeWithPagination } from 'graphql/utils'
import { StoriesType, StoriesInputType } from '../../types/Stories'
import Stories from '../../../models/mongo/Stories'

const mutation = {
  type: StoriesType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(StoriesInputType)
    }
  },
  resolve(root, params) {
    var newStory = new Stories(params.data)
    var doc = newStory.save()
    if (!doc) {
      return new Error('...Can\'n insert')
    }
    else return doc
  }
}
export default mutation