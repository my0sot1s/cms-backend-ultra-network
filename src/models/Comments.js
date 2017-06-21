
import mongoose from 'mongoose'

const Schemas = mongoose.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: mongoose.SchemaTypes.ObjectId },
  postId: { type: mongoose.SchemaTypes.ObjectId },
  content: {
    text: { type: String, default: '' },
    media: { type: Array }
  },
  isSubcomment: { type: Boolean, default: false },
  commentId: { type: mongoose.SchemaTypes.ObjectId }
})


const Model = mongoose.model('Comments', Schemas, 'Comments')


export const find = (limit, page) => {
  const query = Model
    .find({})
    .sort({ dateCreate: -1 })
    .skip(limit && page ? limit * page : 0)
    .limit(limit || 5)
  return query
}


export default Model