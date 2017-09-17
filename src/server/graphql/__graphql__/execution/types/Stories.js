import StoryContent from '../../../models/StoryContent'

export default `
type Stories {
  _id: ID!
  titles: String
  author: String
  begin: String
  views: Int
  liked: Int
  userId: ID
  banner: [String]
  dateCreate: String
  content: StoryContent
}
input StoriesInput {
 titles: String
 author: String
 begin: String
 views: String
 liked: String
 userId: String
 banner: String
}
`

export const storiesResolvers = {
  content: async ({ _id }) => {
    console.log(_id)
    return await StoryContent.findOne({ postId: _id }).exec()
  }
}
