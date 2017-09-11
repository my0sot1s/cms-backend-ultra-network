import { FoodsType } from '../types/Foods'
export default pubsub => ({
  onSaveFood: {
    type: FoodsType,
    resolve: (payload, args, context, info) => {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: () => pubsub.asyncIterator('onSaveFood')
  }
})