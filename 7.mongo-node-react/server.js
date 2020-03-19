import express from "express";
import config from "./config";
import apiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import bodyParser from "body-parser";


console.log(sassMiddleware);

const app = express();
app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", {
    content: "<h1>Hello Express and EJS</h1>"
  });
});

app.use(express.static('public'));
app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log(`Expres on port ${config.port}`);
});
