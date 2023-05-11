const { getAllcount } = require("../services/StringCountServices");

const getCountOfString = (req, res) => {
  const { countString } = req.query;
  if (!countString) {
    return res.status(400).json({ error: "No data provided." });
  }

  const result = getAllcount(countString);
  return res.status(200).json({ result });
};

module.exports = { getCountOfString };
