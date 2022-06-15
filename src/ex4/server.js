import express from "express";

import cors from "cors";
import path from "path";
import { fetchPokemon } from "./server/clients/pokemon_client.js";
import todosRouter from "./server/routes/api.js";

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
app.use("/test", express.static("dist"));

app.use("/api", todosRouter);

app.listen(PORT, () => console.log(`🕎 server is on port ${PORT}`));
