const router = require("express").Router()
router.get('/create-blog', require("../utils/middlewares").authenMiddleware, (req, res) => {
    res.render("blog");
})

export default router