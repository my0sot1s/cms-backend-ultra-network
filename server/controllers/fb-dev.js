const router = require("express").Router()
router.get('/facebook-dev', require("../utils/middlewares").authenMiddleware, (req, res) => {
  res.render("facebook");
})
export default router