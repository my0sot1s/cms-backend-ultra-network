import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'


// create for graphql normal
const networkInterface = createNetworkInterface({
  uri: 'http://baseserver.herokuapp.com/graphql',
})

// for realtime
const wsClient = new SubscriptionClient(`ws://baseserver.herokuapp.com/graphql`, {
  reconnect: true
})

const graphqlWithSubcription = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

// create client and connect to serve
// config see at doc: http://dev.apollodata.com/react/subscriptions.html
const client = new ApolloClient({
  networkInterface: graphqlWithSubcription
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
