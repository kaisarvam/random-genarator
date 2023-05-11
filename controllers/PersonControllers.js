const { createPersonFromData } = require("../services/PersonServices");

const getRandomPerson = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  if (!data || data.length === 0) {
    return res.status(400).json({ error: "No data provided." });
  }
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].toLowerCase();
  }
  const person = createPersonFromData(data);
  return res.status(200).json({ person });
};

module.exports = { getRandomPerson };
