const { router } = require("../utils/packages");
const homePage = require("./routes/homePage");
const weatherPage = require("./routes/weatherPage");

router.use(homePage);
router.use(weatherPage);

module.exports = router;