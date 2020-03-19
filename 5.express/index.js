import express from "express";
import data from "./data/data.json";

const app = express();
const PORT = 3000;

// this is for the public folder on path /
app.use(express.static("public"));

// this is for images folder on path images
app.use("/images", express.static("images"));

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
  console.log(data[0]);
});

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/newItem", (req, res) => {
  res.send(`a post request with /newItem route on port ${PORT}`);
});

app.put("/updateItem", (req, res) => {
  res.send(`a put request with /updateItem route on port ${PORT}`);
});

app.delete("/deleteItem", (req, res) => {
  res.send(`a delete request with /deleteItem route on port ${PORT}`);
});
