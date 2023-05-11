const { genarateRandomNumber } = require("../services/NumberServices");

const getRandomNumber = (req, res) => {
  const { start, end } = req.query;
  if (!start || !end) {
    return res
      .status(400)
      .json({ error: `${start ? "end" : "start"} Parameter is missing.` });
  }
  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
    return res.status(400).json({ error: "Parameters must be valid numbers." });
  }

  const result = genarateRandomNumber(Number(start), Number(end));

  return res.status(200).json({ result });
};

module.exports = { getRandomNumber };
