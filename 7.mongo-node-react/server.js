import express from "express";
import config from "./config";
import apiRouter from "./api";

const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", {
    content: "<h1>Hello Express and EJS</h1>"
  });
});

app.use(express.static("public"));
app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log(`Expres on port ${config.port}`);
});
