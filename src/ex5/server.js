const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const todosRouter = require("./server/routes/api.js");

const app = express();
const PORT = 8080;

//middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routers

app.use(express.static(__dirname + "/dist"));

app.use("/api", todosRouter);

app.listen(PORT, () => console.log(`🕎 server is on port ${PORT}`));
