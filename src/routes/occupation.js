const express = require('express');
const router = express.Router();
const occupationController = require('../controllers/occupationController');

router.get('/:occupationType', occupationController.getOccupationByType);

module.exports = router;