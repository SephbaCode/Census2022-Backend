const pool = require('../db');

async function getCantonOccupationCount(occupation_type) {
  let whereClause = '';
  let values = [];

  if (occupation_type) {
    whereClause = 'WHERE census.ocupation_type = $1';
    values = [occupation_type];
  }

  const query = `
    SELECT ca.name, c.cantidad
    FROM cantons ca
    JOIN (
      SELECT canton, COUNT(*) AS cantidad
      FROM census
      ${whereClause}
      GROUP BY canton
    ) c ON ca.canton_id = c.canton
    ORDER BY ca.name
  `;

  const result = await pool.query(query, values); // ✅ Aquí está el fix
  return result.rows;
}

module.exports = {
  getCantonOccupationCount
};
