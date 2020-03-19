import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Node and express server on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
