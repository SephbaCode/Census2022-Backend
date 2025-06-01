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

// agregado para obtener condiciones por cantón
async function getCantonConditionByType(req, res) {
  const { type } = req.params;
  const { canton } = req.query;

  try {
    const data = await conditionService.getCantonConditionDistribution(type, canton);
    res.json(data);
  } catch (error) {
    console.error('Error al obtener condiciones por cantón:', error.message);
    res.status(400).json({ error: error.message });
  }
}

export { getConditionByType, getCantonConditionByType };
