import Model, { find } from '../models/mongo/StoryContent'
const router = require("express").Router()


router.get('/storycontent', function (req, res) {
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