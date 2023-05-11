const router = require("express").Router();
const NumberRoutes = require("./NumberRoutes");
const PersonRoutes = require("./PersonRoutes");
const StringcountRoutes = require("./StringCountRoutes");

router.use("/api", NumberRoutes);
router.use("/api", PersonRoutes);
router.use("/api", StringcountRoutes);

module.exports = router;
