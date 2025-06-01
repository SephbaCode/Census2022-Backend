// src/services/conditionService.js
const pool = require('../db');

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

module.exports = {
  getConditionDistribution
};

// este servicio se encarga de obtener la distribución de condiciones de un censo
