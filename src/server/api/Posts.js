import Comments, { find as findComments } from '../models/Comments'
import Post, { find as findPost } from '../models/Post'
const router = require("express").Router()

router.get('/post/:postId?', (req, res) => {
  let limit = Number(req.query.limit) || 5
  let page = Number(req.query.page) || 0
  let post = req.params.postId
  findPost(limit, 0, post).exec((err, data) => {
    if (!err && data) {

      findComments(limit, page, data[0]._id).exec((err2, data2) => {
        if (!err2 && data2) {
          res.json({ post: data[0], comments: data2 })
        } else
          res.send(err2)
      })
    } else
      res.send(err)
  })
})

export default router