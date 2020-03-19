import express from "express";
import config from "./config";
import apiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import bodyParser from "body-parser";
import serverRender from './serverRender';

console.log(sassMiddleware);

const app = express();


app.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public")
  })
);

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  serverRender()
  .then(({initialMarkup, initialData}) => {
    res.render("index", {
      initialData,
      initialMarkup
    });
  })
  .catch(console.error);
 
});

app.use(express.static("public"));
app.use("/api", apiRouter);

app.listen(config.port, config.host, () => {
  console.log(`Expres on port ${config.port}`);
});
