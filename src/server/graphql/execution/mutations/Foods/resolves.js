import Foods from '../../../../models/Foods'
import { pubsub, publishEvent } from '../../subscriptions'

// Note : insert food to mongo
export const addFood = async (root, { input }) => {
  var newFood = new Foods(input)
  let doc = await newFood.save()
  if (!doc) {
    return new Error('...Can\'n insert')
  }
  else {
    publishEvent('onSaveFood', doc)
    return doc
  }
}
// Note : update food to mongo
export const editFood = (root, { id, input }) => {
  const editedFood = Foods.findByIdAndUpdate(id, {
    $set: {
      ...input
    }
  })
    .then(data => Foods.findById(id).exec())
    .catch(err => new Error('Not Success'))
}
// Note : delete food to mongo
export const removeFood = (root, { id }) => {
  const deletedFood = Foods.findByIdAndRemove(id)
    .then(() => ({ state: { state: 'done' } }))
    .catch(() => ({ state: { state: "can't delete" } }))
}

export default { addFood, editFood, removeFood }