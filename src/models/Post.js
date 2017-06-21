
import mongoose from 'mongoose'

const Schemas = mongoose.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: mongoose.SchemaTypes.ObjectId },
  post: { type: String },
  media: { type: Array }
})

const Model = mongoose.model('Post', Schemas, 'Post')



export const find = (limit, page) => {
  const query = Model
    .find({})
    .sort({ dateCreate: -1 })
    .skip(limit && page ? limit * page : 0)
    .limit(limit || 5)
  return query
}



export default Model