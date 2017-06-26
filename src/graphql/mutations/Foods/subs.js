import Foods from '../../../models/Foods'
import { FoodsType, FoodsInputType } from '../../types/Foods'


// sub event

export const subscriptionEvent = (ontions, args) => ({
  onSave: food => {
    return food._id = args._id
  }
})


export const subscription = {
  type: FoodsType,
  resolve(item) {
    return item
  }
}