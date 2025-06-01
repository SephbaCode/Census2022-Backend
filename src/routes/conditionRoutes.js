// src/routes/conditionRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/conditionController');

router.get('/canton/:type', controller.getCantonConditionByType);
router.get('/:type', controller.getConditionByType);

module.exports = router;
