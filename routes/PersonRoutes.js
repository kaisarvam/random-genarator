const { getRandomPerson } = require("../controllers/PersonControllers");

const PersonRoutes = require("express").Router();

PersonRoutes.get("/GetPerson", getRandomPerson);

module.exports = PersonRoutes;
