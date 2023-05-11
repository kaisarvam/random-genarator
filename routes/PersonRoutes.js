const { getRandomPerson } = require("../controllers/PersonControllers");

const PersonRoutes = require("express").Router();

PersonRoutes.post("/GetPerson", getRandomPerson);

module.exports = PersonRoutes;
