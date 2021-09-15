import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionURL =
  "mongodb+srv://admin:<password>@cluster0.5vfft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("success"))
  .catch((e) => console.log("not connected"));

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
