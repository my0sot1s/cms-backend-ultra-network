const router = require("express").Router()
router.get('/socket', require("../utils/middlewares").authenMiddleware, (req, res) => {
    res.render("socket");
})
export default router