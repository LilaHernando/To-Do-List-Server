import { Application } from "express";

const express = require("express");
const app: Application = express();
const port = 3000;

app.get("/", async (req, res) => {
  await res.send("conectado a la BD");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
