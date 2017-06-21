import express from 'express'
import Model, { find } from '../models/StoryContent'

const router = express.Router()


router.get('/storycontent', (req, res) => {
  let limit = Number(req.query.limit)
  find(limit || 5).exec((err, data) => {
    if (!err && data) {
      res.json(data)
    }
  })
})

export default router