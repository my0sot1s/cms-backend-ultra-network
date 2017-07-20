export default {
  // Note: getFoods single and multiple
  ...require('./Foods/resolves').default,

  // Note: getStories single and multiple
  ...require('./Stories/resolves').default,

  // Note: getStoryContent single and multiple
  ...require('./StoryContent/resolves').default,
}

export const queryDef = [
  require('./queryDef').default,
]