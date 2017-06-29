import { PubSub, SubscriptionManager } from 'graphql-subscriptions'
import schema from '../schema'
import { subscriptionEvent } from '../mutations/Foods/subs'
export const pubsub = new PubSub();

export default {
  onSaveFood: require('../mutations/Foods/subs').subscription,
}