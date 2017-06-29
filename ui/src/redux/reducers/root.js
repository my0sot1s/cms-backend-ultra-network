import { combineReducers } from 'redux';
import { client } from '../../'

export default combineReducers({
  // todos: todoReducer,
  // users: userReducer,
  apollo: client.reducer(),
})