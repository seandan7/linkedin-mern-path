import express from "express";
import favicon from "serve-favicon";
import path from "path";

import data from "./data/data.json";

const app = express();
const PORT = 3000;

// this is for the public folder on path /
app.use(express.static("public"));

// method to use json
//app.use(express.json());
// method to use urlencode
app.use(
  express.urlencoded({
    extended: true
  })
);

// this is for images folder on path images
app.use("/images", express.static("images"));

// favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/newItem", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get(
  "/item/:id",
  (req, res, next) => {
    // this is the middleware that pulls the data
    let user = Number(req.params.id);
    // middleware that uses request obj
    console.log(`Request from ${req.originalUrl}`);
    console.log(`Request type ${req.method}`);

    // end middleware
    res.send(data[user]);

    // finish first function, go to second
    next();
  },
  (req, res) => {
    console.log("Did you get the right data?");
  }
);

app
  .route("/item")
  .get((req, res) => {
    throw new Error();
    //res.send(`a post request with /newItem route on port ${PORT}`);
  })
  .put((req, res) => {
    res.send("a put request");
  })
  .delete((req, res) => {
    res.send(`a delete request with /item route on port ${PORT}`);
  });

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Red alert! : ${err.stack}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
