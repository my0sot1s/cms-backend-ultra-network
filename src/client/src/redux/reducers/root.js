import { combineReducers } from 'redux';
import client from '../../helpers/apollo'

export default combineReducers({
  // todos: todoReducer,
  // users: userReducer,
  apollo: client.reducer(),
})