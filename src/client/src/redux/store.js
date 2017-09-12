import rootReducer from './reducers/root'
import client from '../helpers/apollo'
import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import DevTool from '../utils/DevTools'



let middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}
middleware = [...middleware, client.middleware()]

export default (client, initialState) => createStore(
  rootReducer,
  initialState, // initial state
  compose(
    applyMiddleware(...middleware),
    // If you are using the devToolsExtension, you can add it here also
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined')
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
    DevTool.instrument()
  )
);