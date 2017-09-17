import { BlogType } from '../types/Blog'

export default pubsub => ({
  onSaveBlog: {
    type: BlogType,
    resolve: (payload, args, context, info) => {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: () => pubsub.asyncIterator('onSaveBlog')
  },
  onUpdateBlog: {
    type: BlogType,
    resolve: (payload, args, context, info) => {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: () => pubsub.asyncIterator('onUpdateBlog')
  },
  onDeleteBlog: {
    type: BlogType,
    resolve: (payload, args, context, info) => {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: () => pubsub.asyncIterator('onDeleteBlog')
  }
})