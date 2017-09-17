import Foods from '../../../../models/Foods'

export const getFood = async (root, args, context) => {
  return await Foods.findById(args.id).exec()
}

export const getFoods = () => {
  return Foods.find().exec()
}

export default { getFoods, getFood }