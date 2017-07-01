import * as query from './queries'
import * as muation from './mutations'
const a = {
  Query: {
    ...require('./queries').default
  }
  // Mutation: {
  //   ...require('./mutations').default
  // }
}

console.log(a)
export default a