import { PubSub, SubscriptionManager } from 'graphql-subscriptions'
import schema from '../schema'
import { subscriptionEvent } from '../mutations/Foods/subs'
const pubsub = new PubSub();

export const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
})
