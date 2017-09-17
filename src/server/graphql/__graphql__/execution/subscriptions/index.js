import { PubSub } from 'graphql-subscriptions'
export const pubsub = new PubSub()

export const publishEvent = (event, doc) => {
  pubsub.publish(event, doc)
}
export default {
  onSaveFood: {
    resolve: (payload, args, context, info) => {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: () => pubsub.asyncIterator('onSaveFood')
  },
}
export const subscriptionsDef = require('./subscriptionsDef').default