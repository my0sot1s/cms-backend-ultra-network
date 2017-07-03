export default {
  // Note : implement queries
  // Thực thi các truy vấn query
  Query: {
    ...require('./queries').default
  },
  // Note : implement mutations
  // Thực thi các truy vấn mutation
  Mutation: {
    ...require('./mutations').default
  },
  // Note : implement subscriptions
  // Thực thi subscription
  Subscription: {
    ...require('./subscriptions').default
  }
}

export const typeDefs = [
  // Note: Get all type
  // Lấy toàn bộ các định nghĩa kiểu.
  ...require('./types').default,
  // Note: get all define queries
  // Lấy các định nghĩa về truy vấn. query
  ...require('./queries').queryDef,
  // Note: get all define mutation
  // Lấy các định nghĩa về truy vấn. mutation
  ...require('./mutations').mutationDef,
  // Note: get all define subscription
  // Lấy các định nghĩa về truy vấn. subscription
  require('./subscriptions').subscriptionsDef,
]
