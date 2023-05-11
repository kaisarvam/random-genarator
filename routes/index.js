const router = require("express").Router();
const NumberRoutes = require("./NumberRoutes");
const PersonRoutes = require("./PersonRoutes");
const StringcountRoutes = require("./StringCountRoutes");

router.use("", NumberRoutes);
router.use("", PersonRoutes);
router.use("", StringcountRoutes);

module.exports = router;
