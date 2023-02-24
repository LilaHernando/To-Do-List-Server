require("dotenv").config();
const { Pool } = require("pg");

const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGPORT } = process.env;

const pool = new Pool({
  user: PGUSER,
  host: PGHOST,
  password: PGPASSWORD,
  database: PGDATABASE,
  port: PGPORT,
});

pool
  .connect()
  .then(() => console.log("Conexión a la base de datos exitosa!"))
  .catch((err:any) =>
    console.error("Error al conectar a la base de datos", err.stack)
  );

module.exports = pool;
