import mongoose from 'mongoose'
import crypto from 'crypto'
import Promise from 'promise'

//Create a schema for chat
const Schema = mongoose.Schema({
    dateCreate: { type: Date, default: Date.now() },
    username: { type: String, default: '' },
    password: { type: String, default: '' },
    firstName: { type: String },
    lastName: { type: String },
    displayName: { type: String, default: 'Unknowed!!' },
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
 * @param {String} password 
 * @param {String} hashPass 
 * @param {String} salt 
 */
const hash = (password, hashPass, salt) => {
    console.log(hashPass, salt)
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt.toHexString(), 1000, 16, 'sha512', (err, derivedKey) => {
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
    doc.salt = mongoose.Types.ObjectId().toHexString();
    crypto.pbkdf2(doc.password, doc.salt, 1000, 16, 'sha512', (err, derivedKey) => {
        if (err) cb(err, null)
        else {
            doc.password = derivedKey.toString('hex')
            let user = new Model(doc)
            user.save((err, doc) => {
                if (err) cb(err, null)
                else cb(null, doc)
            })
        }
    });
}
/**
 * 
 * @param {String} username 
 * @param {String} passWord 
 * @param {Function} cb 
 * @return {object.}
 */
export const login = function (username, password, cb) {
    Model.find({ username }, function (err, resp) {
        if (err) throw new Error(err)
        else {
            if (resp.length === 0) {
                cb('Wrong username', false)
            } else
                hash(password, resp[0].password, resp[0].salt)
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

export const changeInfor = function (username, password, cb) {

};
export const changePassword = function (oldPw, newPw, cb) {

};

//Create a model from the chat schema
export default Model