const router = require("express").Router()
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public/index.html'))
    res.render("index");
})
export default router