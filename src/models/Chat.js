import mongoose from 'mongoose'


//Create a schema for chat
const Schema = mongoose.Schema({
  created: { type: Date, default: Date.now() },
  content: { type: String, default: '' },
  username: { type: String, default: '' },
  room: { type: String, default: '' },
});

//Create a model from the chat schema
export default mongoose.model('Chats', Schema, 'Chats');