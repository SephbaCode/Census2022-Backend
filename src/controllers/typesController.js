const pool = require('../db');

const getAllTypes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM types');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los types:', error);
    res.status(500).send('Error al obtener los types');
  }
};

const getOccupationTypes = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM types WHERE code LIKE 'OP%'");
    if (result.rows.length === 0) {
      return res.status(404).send('Type not found');
    }
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener el type:', error);
    res.status(500).send('Error al obtener el type');
  }
}


module.exports = { getAllTypes, getOccupationTypes };
