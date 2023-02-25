import { Request, Response } from "express";
const pool = require("../../config/db");
import { categories } from "../models/Categories.model";

const getCategories = async (req: Request, res: Response) => {
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
    const { name } = req.body;
    const categorie = await pool.query(`SELECT * FROM categories WHERE name = '${name}'`)
    if (categorie.rowCount === 0) {
      await pool.query(`INSERT INTO categories (name) VALUES('${name}')`)
    } else {
      return res.json({ message: `${name} is already added` })
    }
    return res.json({ message: `${name} is added` })
  } catch (error: any) {
    res.status(404).json({ error: error.message })
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const consult = await pool.query(`SELECT * FROM categories WHERE id_categories = ${id}`);
    let category: categories = consult.rows;
    if(consult.rowCount !== 0){
      return res.json(category)
    }else{
      res.status(404).json({message: `category with id ${id} dont exist`})
    }
  } catch (error: any) {
    res.status(404).json({ error: error.message })
  }
}
const updateCategory = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {name} = req.body
    const query: string = `UPDATE categories SET name = '${name}' WHERE id_categories = ${id}`
    await pool.query(query)
    return res.json({message: 'updated category'})
  } catch (error: any) {
    res.status(404).json({ error: error.message })
  }
}

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const consult = await pool.query(`SELECT * FROM categories WHERE id_categories = ${id}`);
    if(consult.rowCount !== 0){
      const query: string = `DELETE FROM categories WHERE id_categories = ${id}`
      await pool.query(query)
    }else{
      return res.status(404).json({message: `category with id ${id} dont exist`})
    }
    return res.json({mesasge: `category with id ${id} was delete`})
  } catch (error: any) {
    res.status(404).json({ error: error.message })
  }
}
module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
//recibir la información de la categoria
//Para hacer la busqueda debo garantizar que
//debo verificar que el nombre de esa categoria no se encuentre creada.
//si la categoría ya exixte enviar mensaje
//si no existe se debe crear la categoría en la base de datos
