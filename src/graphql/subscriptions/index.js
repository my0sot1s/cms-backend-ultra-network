import { PubSub, SubscriptionManager } from 'graphql-subscriptions'
import schema from '../schema'
import { FoodsType } from '../types/Foods'

export const pubsub = new PubSub();

export const publishEvent = (event, doc) => {
  debugger
  pubsub.publish(event, doc)
}
export default {
  onSaveFood: {
    type: FoodsType,
    resolve: (payload, args, context, info) => {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: () => pubsub.asyncIterator('onSaveFood')
  }
}