
import mongoose from 'mongoose'

const Schemas = mongoose.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: mongoose.SchemaTypes.ObjectId },
  post: { type: String },
  media: { type: Array }
})

export default mongoose.model('Post', Schemas, 'Post')
