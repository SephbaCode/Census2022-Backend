const pool = require('../db');

const getAllCantons = async (req, res) => {
  try {
    const result = await pool.query('SELECT canton_id, name FROM cantons');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los cantones:', error);
    res.status(500).send('Error al obtener los cantones');
  }
}

module.exports = { getAllCantons };