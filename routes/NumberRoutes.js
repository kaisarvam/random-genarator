const { getRandomNumber } = require("../controllers/NumberControllers");

const NumberRoutes = require("express").Router();

NumberRoutes.get("/GetRandomNumber", getRandomNumber);

module.exports = NumberRoutes;
