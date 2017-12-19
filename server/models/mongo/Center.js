
import mongoose from 'mongoose'
// import data from '../../data.json'

const Schemas = mongoose.Schema({
    link: { type: String },
    tag: { type: String },
    title: { type: String },
    dateCreate: { type: Date, default: Date.now() },
})

const Model = mongoose.model('Center', Schemas, 'Center')

// for (let i = 0; i < data.length; i++) {
//   new Model(data[i]).save((e, r) => {
//     if (!e) {
//       console.log(r)
//     }
//   })
// }

export const find = (limit, page, params) => {
    const postId = params ? { _id: mongoose.Types.ObjectId(params) } : {};
    const query = Model
        .find(postId)
        .sort({ dateCreate: -1 })
        .skip(limit && page ? limit * page : 0)
        .limit(limit || 5)
    return query
}

// for create field

export async function save(params) {
    let result = await new Model(params).save()
    return result
}

// find and update

export async function update({ _id, link, tag, title }) {
    return await Model.findByIdAndUpdate({ _id }, {
        $set: {
            link,
            tag,
            title
        }
    })
}



export default Model