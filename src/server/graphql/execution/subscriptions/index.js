import { PubSub } from 'graphql-subscriptions'
export const pubsub = new PubSub()

export default {
  onSaveFood: {
    subscribe: () => pubsub.asyncIterator('onSaveFood')
  }
}

export const subscriptionsDef = require('./subscriptionsDef').default