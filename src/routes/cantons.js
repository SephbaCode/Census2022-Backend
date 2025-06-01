const express = require('express');
const router = express.Router();
const cantonsController = require('../controllers/cantonsController');

router.get('/', cantonsController.getAllCantons);

module.exports = router;