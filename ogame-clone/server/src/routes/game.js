const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Route to start a new game
router.post('/start', gameController.startGame);

// Route to retrieve game data
router.get('/data/:userId', gameController.getGameData);

// Route to update game state
router.put('/update/:userId', gameController.updateGameState);

// Route to end the game
router.delete('/end/:userId', gameController.endGame);

module.exports = router;