
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


// for (let i = 0; i < 10; i++) {
//   var d = {
//     userId: mongoose.Types.ObjectId('594795b17fe4e54f72daace9'),
//     postId: mongoose.Types.ObjectId('594cd8c35755a06d674eb1a1'),
//     content: {
//       text: 'comment số ' + i
//     },
//   }
//   new Model(d).save((e, r) => {
//     if (!e) {
//       console.log(r)
//     }
//   })
// }



export const find = (limit, page) => {
    const query = Model
        .find({})
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

export async function update({ _id, content }) {
    return await Model.findByIdAndUpdate({ _id }, {
        $set: {
            content,
        }
    })
}


export default Model