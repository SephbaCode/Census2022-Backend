const express = require('express');
const router = express.Router();
const typesController = require('../controllers/typesController');

router.get('/', typesController.getAllTypes);

module.exports = router;
