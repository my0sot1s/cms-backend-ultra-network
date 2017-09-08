import express from 'express'
import Model, { find, save, findbyId } from '../models/Blog'



const router = express.Router()

//ex:http://localhost:3001/api/stories?limit=2&page=2

router.get('/blog', (req, res) => {
  let limit = Number(req.query.limit) || 5,
    page = Number(req.query.page) || 0,
    id = req.query.id;
  if (id) {
    findbyId(id).then((data) => {
      res.send(data);
    })
  } else
    find(limit, page, req.query.postId).exec((err, data) => {
      if (!err && data) {
        res.json(data)
      } else
        res.send(err)
    })
})

// insert post

router.post('/blog', (req, res) => {
  // debugger
  save(req.body).then((succ) => {
    res.send(succ);
  });

})

export default router