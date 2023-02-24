import { Application } from "express";

const cors = require("cors");
const express = require("express");
const app: Application = express();
const router = require('./app/routes')
const port = 3000;

app.use(cors())
app.use(express.json())
app.use('/api/v1/',router)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
