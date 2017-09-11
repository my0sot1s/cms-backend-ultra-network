import { PubSub, SubscriptionManager } from 'graphql-subscriptions'
import schema from '../schema'
import Foods from './Blog_PS'
import Blog from './Blog_PS'

export const pubsub = new PubSub();

export const publishEvent = (event, doc) => {
  pubsub.publish(event, doc)
}
export default {
  ...Foods(pubsub),
  ...Blog(pubsub)
}