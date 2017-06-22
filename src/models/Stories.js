
import mongoose from 'mongoose'
const Schemas = mongoose.Schema({
  titles: { type: String },
  author: { type: String },
  begin: { type: String },
  views: { type: Number, default: 0 },
  liked: { type: Number, default: 0 },
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: mongoose.SchemaTypes.ObjectId },
  banner: { type: Array }
})

const Model = mongoose.model('Stories', Schemas, 'Stories')


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