export default `
type StoryContent {
  _id: ID!
  banner: String
  content: [String]
  images: [String]
  postId: ID
}
input StoryContentInput {
  banner: String
  content: [String]
  images: [String]
  postId: ID
}
`