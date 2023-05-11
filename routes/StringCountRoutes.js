const { getCountOfString } = require("../controllers/StringCountControllers");

const StringCountRoutes = require("express").Router();

StringCountRoutes.get("/StringCount", getCountOfString);

module.exports = StringCountRoutes;
