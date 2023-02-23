const pool = require("../../config/db");

const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    const category = await pool.query(
      `SELECT categoryName FROM categories WHERE categoryName = "${categoryName}"`
    );

    if (category.rowCount === 0) {
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createCategory,
};
//recibir la información de la categoria
//Para hacer la busqueda debo garantizar que
//debo verificar que el nombre de esa categoria no se encuentre creada.
//si la categoría ya exixte enviar mensaje
//si no existe se debe crear la categoría en la base de datos
