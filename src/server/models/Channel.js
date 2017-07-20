
import mongoose from 'mongoose'
// import data from '../../data.json'

const Schemas = mongoose.Schema({
    title: { type: String },
    avatar: { type: String },
    dateCreate: { type: Date, default: Date.now() },
})

export default mongoose.model('Channel', Schemas, 'Channel')