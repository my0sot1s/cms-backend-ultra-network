
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ApolloProvider } from 'react-apollo'
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import client from './helpers/apollo'
import createStore from './redux/store'
// import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import DevTool from './utils/DevTools'



ReactDOM.render(
  <ApolloProvider store={createStore(client)} client={client} >
    <div id="base">
      <App />
      <DevTool />
    </div>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
