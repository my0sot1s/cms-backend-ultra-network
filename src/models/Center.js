
import mongoose from 'mongoose'

const Schemas = mongoose.Schema({
  link: { type: String },
  tag: { type: String },
  title: { type: String },
  dateCreate: { type: Date, default: Date.now() },
})

const Model = mongoose.model('Center', Schemas, 'Center')


export const find = (limit, page, params) => {
  const postId = params ? { _id: mongoose.Types.ObjectId(params) } : {};
  const query = Model
    .find(postId)
    .sort({ dateCreate: -1 })
    .skip(limit && page ? limit * page : 0)
    .limit(limit || 5)
  return query
}



export default Model