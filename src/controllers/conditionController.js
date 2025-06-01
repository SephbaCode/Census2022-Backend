// src/controllers/conditionController.js
import conditionService from '../services/conditionService.js';

async function getConditionByType(req, res) {
  const { type } = req.params;

  try {
    const data = await conditionService.getConditionDistribution(type);
    res.json(data);
  } catch (error) {
    console.error('Error al obtener condiciones:', error.message);
    res.status(400).json({ error: error.message });
  }
}

export { getConditionByType };
