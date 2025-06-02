const express = require('express');
const router = express.Router();
const typesController = require('../controllers/typesController');

router.get('/occupation', typesController.getOccupationTypes);
router.get('/', typesController.getAllTypes);

module.exports = router;
