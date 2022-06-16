import express from "express";

import cors from "cors";

import todosRouter from "./server/routes/api.js";

//__dirname is not supported in es6
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

//middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers

app.use(express.static(__dirname + "/dist"));

app.use("/api", todosRouter);

app.listen(PORT, () => console.log(`🕎 server is on port ${PORT}`));
