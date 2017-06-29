import Foods from '../../../models/Foods'
import { FoodsType, FoodsInputType } from '../../types/Foods'


// sub event

export const subscriptionEvent = ontions => ({
  onSaveFood: food => {
    console.log({ food })
    return food
  }
})


export const subscription = {
  type: FoodsType,
  // resolve: item => item,
  start: (a, b, c) => {
    debugger
  },
  stop(){
    debugger
  }
}