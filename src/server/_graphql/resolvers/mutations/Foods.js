import Foods from '../../../models/Foods'

export const addFood = async (root, args) => {
  var newFood = new Foods(params.input)
  var doc = await newFood.save()
  if (!doc) {
    return new Error('...Can\'n insert')
  }
  else {
    return doc
  }
}