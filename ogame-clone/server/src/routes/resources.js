const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Route to get all resources
router.get('/resources', gameController.getResources);

// Route to update resources
router.put('/resources', gameController.updateResources);

// Route to get a specific resource
router.get('/resources/:id', gameController.getResourceById);

module.exports = router;