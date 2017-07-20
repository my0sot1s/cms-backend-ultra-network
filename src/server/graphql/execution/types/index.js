export default [
  require('./Foods').default,
  require('./State').default,
  require('./Stories').default,
  require('./StoryContent').default,

  // Channel chat room
  require('./Message').default,
  require('./User').default,
  require('./Channel').default,
]

export const typeResolves = {
  Stories: require('./Stories').storiesResolvers
}