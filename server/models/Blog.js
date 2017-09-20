
import mongoose from 'mongoose'
// import data from '../../data.json'

const Schemas = mongoose.Schema({
    link: { type: String },
    tag: { type: String },
    title: { type: String },
    dateCreate: { type: Date, default: Date.now() },
    content: { type: String }
})

const Model = mongoose.model('Blog', Schemas, 'Blog')

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
    let result = new Model(params)
    return await result.save()
}

export async function findbyId(id) {
    return await Model.findById(id, (err, res) => {
        return res;
    })
}

// find and update

export async function deleted(_id) {
    return await Model.findByIdAndRemove(_id, (err, kq) => {
        if (err) return { err }
        else return { kq }
    })
}



export default Model