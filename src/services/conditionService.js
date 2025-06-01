// src/services/conditionService.js
const pool = require('../db');
const { get } = require('../routes/cantons');

const allowedColumns = ['roof_condition', 'wall_condition', 'floor_condition'];

async function getConditionDistribution(column) {
  if (!allowedColumns.includes(column)) {
    throw new Error('Columna no permitida');
  }

  const query = `
    SELECT co.description AS condicion, c.cuenta
    FROM conditions co
    JOIN (
      SELECT ${column} AS condition_id, COUNT(*) AS cuenta
      FROM census
      GROUP BY ${column}
    ) AS c ON co.id = c.condition_id
    ORDER BY c.cuenta DESC;
  `;

  const { rows } = await pool.query(query);
  return rows;
}

// con condicion devuelve las condiciones de un tipo por canton ingresa un codgigo
//sin condicion devuelve todos las condiciones de todos los cantones
async function getCantonConditionDistribution(column, canton) {
  if (!allowedColumns.includes(column)) {
    throw new Error('Columna no permitida');
  }

  let whereClause = '';
  let values = [];

  if (canton) {
    whereClause = 'WHERE census.canton = $1';
    values = [canton];
  }

  const query = `
    SELECT ca.name, co.description AS condicion, c.cuenta
    FROM conditions co
    JOIN (
      SELECT census.canton, census.${column} AS condition_id, COUNT(*) AS cuenta
      FROM census
      ${whereClause}
      GROUP BY census.canton, census.${column}
    ) AS c ON co.id = c.condition_id
    JOIN cantons ca ON ca.canton_id = c.canton
    ORDER BY c.cuenta DESC;
  `;

  const result = await pool.query(query, values);
  return result.rows;
}

module.exports = {
  getConditionDistribution, getCantonConditionDistribution
};

// este servicio se encarga de obtener la distribución de condiciones de un censo
