import occupationService from '../services/occupationService.js';

async function getOccupationByType(req, res) {
  const { occupationType } = req.params;

  try {
    const data = await occupationService.getCantonOccupationCount(occupationType);
    res.json(data);
  } catch (error) {
    console.error('Error al obtener ocupaciones:', error.message);
    res.status(400).json({ error: error.message });
  }
}

export { getOccupationByType };
