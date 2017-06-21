import mongoose from 'mongoose'
import crypto from 'crypto'
import Promise from 'promise'

//Create a schema for chat
const Schema = mongoose.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userName: { type: String, default: '' },
  passWord: { type: String, default: '' },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  borned: { type: String },
  gender: { type: Number, default: 1 },//0 gái,1 trai,2 khác
  avatar: { type: String, default: 'https://s3.amazonaws.com/wll-community-production/images/no-avatar.png' },
  salt: { type: mongoose.SchemaTypes.ObjectId }
});

Schema.virtual('fullName')
  .get(() => {
    return this.firstName.concat(' ', this.lastName)
  })
  .set((name) => {
    let split = name.split('*');
    this.lastName = split[1]
    this.firstName = split[0]
  })

const Model = mongoose.model('User', Schema, 'User');

/**
 * 
 * @param {String} passWord 
 * @param {String} hashPass 
 * @param {String} salt 
 */
const hash = (passWord, hashPass, salt) => {
  console.log(hashPass, salt)
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(passWord, salt.toHexString(), 1000, 16, 'sha512', (err, derivedKey) => {
      if (err) reject(err)
      else {
        derivedKey.toString('hex') === hashPass ? resolve(null, true) : resolve('Wrong Password', false)
      }
    })
  })
}
/**
 * 
 * @param {Object} doc 
 * @param {Function} cb 
 */
export const register = (doc, cb) => {
  crypto.pbkdf2(doc.passWord, doc.salt.toHexString(), 1000, 16, 'sha512', (err, derivedKey) => {
    if (err) throw new Error(err);
    else {
      doc.passWord = derivedKey.toString('hex')
      let user = new Model(doc)
      user.save((err, doc) => {
        if (err) throw new Error(err)
        else cb(doc)
      })
    }
  });
}
/**
 * 
 * @param {String} userName 
 * @param {String} passWord 
 * @param {Function} cb 
 */
export const login = (userName, passWord, cb) => {
  Model.find({ userName }, (err, resp) => {
    if (err) throw new Error(err)
    else {
      if (resp.length === 0) {
        cb('Wrong userName', false)
      } else
        hash(passWord, resp[0].passWord, resp[0].salt)
          .then((err, res) => {
            if (err) {
              cb(err, false)
            } else { cb(null, true, resp[0]) }
          })
          .catch(err => {
            console.log(err)
            cb('System', false)
          })
    }
  })
}
//Create a model from the chat schema
export default Model