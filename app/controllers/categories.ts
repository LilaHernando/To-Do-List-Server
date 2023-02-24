import { Request, Response } from "express";
const pool = require("../../config/db");
import { categories } from "../models/Categories.model";

 const getCategories = async (req: Request, res:Response) => {
  try {
    const categories = await pool.query('SELECT * FROM categories')
    const arrayCategory: categories[] = categories.rows
    res.json(arrayCategory)
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}
 const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    const category = await pool.query(
      `SELECT categoryName FROM categories WHERE categoryName = "${categoryName}"`
    );

    if (category.rowCount === 0) {
    }
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createCategory,
  getCategories
};
//recibir la información de la categoria
//Para hacer la busqueda debo garantizar que
//debo verificar que el nombre de esa categoria no se encuentre creada.
//si la categoría ya exixte enviar mensaje
//si no existe se debe crear la categoría en la base de datos
