import mongoose from 'mongoose'


//Create a schema for chat
const Schema = mongoose.Schema({
  created: { type: Date, default: Date.now() },
  content: { type: String, default: '' },
  username: { type: String, default: '' },
  room: { type: String, default: '' },
});

//Create a model from the chat schema
const Model = mongoose.model('Chats', Schema, 'Chats')


export const find = (limit, page) => {
  const query = Model
    .find({})
    .sort({ dateCreate: -1 })
    .skip(limit && page ? limit * page : 0)
    .limit(limit || 5)
  return query
}




export default Model