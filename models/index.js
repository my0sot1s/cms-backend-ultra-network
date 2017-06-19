import mongoose from 'mongoose'
import Chat from './Chat'
import User, { register, login } from './User'
import Comments from './Comments'

//Connect to mongo DB database
mongoose.connect("mongodb://dev:1223@ds159328.mlab.com:59328/dbnode");


const doc = {
  userName: 'admin',
  passWord: 'admin',
  email: 'manhte231@gmail.com',
  borned: '2/3/2000',
  lastName: 'Hoang',
  firstName: 'Nguyen',
  avatar: 'http://i.imgur.com/Fm78yn7.jpg',
  salt: mongoose.Types.ObjectId()
}
console.log(doc)
// register(doc, d => {
//   console.log(d)
// })
login('admin', 'admin', (err, i, info) => {
  console.log(err, i)
  if (i) {
    console.log(info)
  }
})
export { Chat, User, Comments }