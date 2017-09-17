const router = require("express").Router()
router.get('/graphql', require("../utils/middlewares").authenMiddleware, (req, res) => {
  res.render("graphql");
})
export default router