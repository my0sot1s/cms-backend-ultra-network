
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


export default mongoose.model('Comments', Schemas, 'Comments')
