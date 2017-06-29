import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import rootReducer from './redux/reducers/root'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'

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
const graphqlWithSubcription = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

// create client and connect to serve
// config see at doc: http://dev.apollodata.com/react/subscriptions.html
export const client = new ApolloClient({
  networkInterface: graphqlWithSubcription
})


let middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

const store = createStore(
  // rootReducer,
  combineReducers({
    apollo: client.reducer()
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined')
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  )
);

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
