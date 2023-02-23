//require("dotenv").config();
const { Pool } = require("pg");

//const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGPORT } = process.env;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Colombia45a",
  database: "ToDoList",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("Conexión a la base de datos exitosa!"))
  .catch((err) =>
    console.error("Error al conectar a la base de datos", err.stack)
  );

module.export = pool;
