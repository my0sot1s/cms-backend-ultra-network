export default {
  getFood: require('./Foods/resolves').getFood,
  getFoods: require('./Foods/resolves').getFoods
}
export const queryDef = [
  require('./Foods/queryDef').default,
]