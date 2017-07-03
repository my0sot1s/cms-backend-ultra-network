export default {
  addFood: require('./Foods/resolves').addFood,
  editFood: require('./Foods/resolves').editFood,
  removeFood: require('./Foods/resolves').removeFood
}

export const mutationDef = [
  require('./Foods/mutationDef').default,
]