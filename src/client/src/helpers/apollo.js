import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import { createNetworkInterface, ApolloClient } from 'react-apollo'

// create for graphql normal
const networkInterface = createNetworkInterface({
  uri: 'https://baseserver.herokuapp.com/graphql',
  // uri: 'http://localhost:3001/graphql'
})

// for realtime
const wsClient = new SubscriptionClient(
  `ws://baseserver.herokuapp.com/subscriptions`,
  // `ws://localhost:3001/subscriptions`,
  {
    reconnect: true
  })

// addSubcription to graphql
const graphqlSubscriptionInterface = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)
// create client and connect to serve
// config see at doc: http://dev.apollodata.com/react/subscriptions.html

export default new ApolloClient({
  networkInterface: graphqlSubscriptionInterface
})
