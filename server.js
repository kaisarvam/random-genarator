const express = require("express");
require("dotenv").config();
const routes = require("./routes");
const app = express();
app.use(express.json());
app.use(routes);
const port = process.env.PORT || 5000;

app.get("/health", (_req, res) => {
  const obj = {
    message: "server is working fine",
  };
  res.json(obj);
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
