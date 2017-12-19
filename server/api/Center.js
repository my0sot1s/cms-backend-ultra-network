import Model, { find } from '../models/mongo/Center'
const router = require("express").Router()
//ex:http://localhost:3001/api/stories?limit=2&page=2

router.get('/center', function (req, res) {
    let limit = Number(req.query.limit) || 5
    let page = Number(req.query.page) || 0
    find(limit, page, req.query.postId).exec(function (err, data) {
        if (!err && data) {
            res.json(data)
        } else
            res.send(err)
    })
})

export default router
