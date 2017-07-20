
import mongoose from 'mongoose'
// import data from '../../data.json'

const Schemas = mongoose.Schema({
  text: { type: String },
  createdBy: { type: mongoose.SchemaTypes.ObjectId },
  dateCreate: { type: Date, default: Date.now() },
})

export default mongoose.model('Message', Schemas, 'Message')