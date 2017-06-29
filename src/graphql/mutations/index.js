
export default {
  ...require('./Foods').default,
  ...require('./Stories').default,
  ...require('./StoryContent').default,
}

export const subscription = require('./Foods/subs').subscription
export const subscriptionEvent = require('./Foods/subs').subscriptionEvent