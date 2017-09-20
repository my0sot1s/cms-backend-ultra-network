
import mongoose from 'mongoose'

const Schemas = mongoose.Schema({
    banner: { type: Array },
    content: { type: Array },
    images: { type: Array },
    postId: { type: mongoose.SchemaTypes.ObjectId }
})

const Model = mongoose.model('StoriesContent', Schemas, 'StoriesContent')


export const find = (limit, page, params) => {
    const postId = params ? { postId: mongoose.Types.ObjectId(params) } : {};
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

export async function update({ _id, banner, content, images, postId }) {
    return await Model.findByIdAndUpdate({ _id }, {
        $set: {
            banner,
            content,
            images,
            postId
        }
    })
}


export default Model
