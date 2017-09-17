export default `
type Query {
  getFood(id:ID):Foods
  getFoods:[Foods]

  getStories: [Stories]
  getStory(id:ID): Stories

  getStoryContents: [StoryContent]
  getStoryContent(id:ID): StoryContent
}
`