import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/crmRoutes";

const app = express();

const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//bodyParser setup
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
