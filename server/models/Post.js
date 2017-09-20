
import mongoose from 'mongoose'

const Schemas = mongoose.Schema({
    dateCreate: { type: Date, default: Date.now() },
    userId: { type: mongoose.SchemaTypes.ObjectId },
    post: { type: String },
    media: { type: Array }
})

const Model = mongoose.model('Post', Schemas, 'Post')

// const post = {
//   userId: mongoose.Types.ObjectId('594795b17fe4e54f72daace9'),
//   post: `Xin phép a thắng và mod duyệt giúp e :(E có ipad mini cho đứa cháu chơi , chủ yếu là bật YouTube xem mấy chương trình con nít mà vô tình bị chủ iCloud khoá! Máy e mua cũng 3-4 năm ở FPT, lúc e mua xong e có restore bình thường, đến tuần trước đi thay mặt kính do cháu làm vỡ thì thay gần 1 tiếng ở đường 3/2 Q10. Thay xong e thấy không có iCloud nhưng e chưa restore thử do không biết có bị cài iCloud ẩn không! Thì sáng ra thấy như hình! E up nhờ ae giúp e hay đi bẻ khoá`
// }
// new Model(post).save((e, r) => {
//   if (!e) {
//     console.log(r)
//   }
// })
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

export async function update({ _id, post, media }) {
    return await Model.findByIdAndUpdate({ _id }, {
        $set: {
            post,
            media
        }
    })
}


export default Model