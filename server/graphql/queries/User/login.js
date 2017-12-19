// login

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'
import Promise from "bluebird"
import { UserType } from '../../types/User'
import User, { login } from '../../../models/mongo/User'
import jwt from 'jsonwebtoken';
const cst = require("../../../utils/constants");
export default {
  type: UserType,
  args: {
    username: {
      name: "username",
      type: GraphQLString
    },
    password: {
      name: "password",
      type: GraphQLString
    }
  },
  resolve(root, params) {
    async () => {
      await login(params.username, params.password, (err, isLogin, user) => {
        if (err || !isLogin) return { login: "false" }
        jwt.sign({ username: user.username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, (err, token) => {
          if (err) return { login: "false", cause: "Can not set token" }
          return {
            login: "successfull",
            user: user.username,
            access_token: token
          }
        })
      })
    }
  }
}
