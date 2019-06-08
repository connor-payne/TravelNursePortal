const mongoose = require("mongoose");
const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const app = express();
const cors = require("cors");
const config = require("./config");

app.use(cors());

const connectionString = `mongodb://${config.host}:${config.portDB}/${
  config.db
}`;

mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(() => console.log(`Connected to ${connectionString}...`))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/users", users);
// app.use("/auth", auth);

app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}...`)
);
