const router = require("express").Router();
const NumberRoutes = require("./NumberRoutes");
const PersonRoutes = require("./PersonRoutes");
const StringcountRoutes = require("./StringCountRoutes");

const CommonApiText = `/api`;

router.use(CommonApiText, NumberRoutes);
router.use(CommonApiText, PersonRoutes);
router.use(CommonApiText, StringcountRoutes);

module.exports = router;
