export default {
  // Note: mutation of foods with add,edit,remove
  ...require("./Foods/resolves").default,


}

export const mutationDef = [
  require('./mutationDef').default,
]