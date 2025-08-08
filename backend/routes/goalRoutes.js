// GET, POST, PUT, DELETE API end points for goals
const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalControllers');

// Create a new goal
router.post('/', goalController.createGoal);

// List goals
router.get('/', goalController.listGoals);

// Get a single goal by ID
router.get('/:id', goalController.readGoalById);

//  and roUpdate a goal by ID
router.put('/:id', goalController.updateGoal);

// Delete a goal by ID
router.delete('/:id', goalController.deleteGoal);

module.exports = router;