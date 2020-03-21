import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 3000;

// helmet setup
app.use(helmet());

// rate limit setup
const limiter = new rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit number of requests per ip per 15min
  delayMs: 0 // disables delays
});
app.use(limiter); // apply this

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb");

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
