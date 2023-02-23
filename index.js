const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  await res.send("conectado a la BD");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
