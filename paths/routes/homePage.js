const { router } = require("../../utils/packages")

router.get("/", (req, res)=> {
    res.render("home")
})

module.exports = router;