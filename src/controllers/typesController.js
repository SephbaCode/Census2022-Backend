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


module.exports = { getAllTypes };
