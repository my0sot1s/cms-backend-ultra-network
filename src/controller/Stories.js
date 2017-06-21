import express from 'express'
import Model, { find } from '../models/Stories'



const router = express.Router()

//ex:http://localhost:3001/api/stories?limit=2&page=2

router.get('/stories', (req, res) => {
  let limit = Number(req.query.limit) || 5
  let page = Number(req.query.page) || 0
  find(limit, page).exec((err, data) => {
    if (!err && data) {
      res.json(data)
    }
  })
})

export default router