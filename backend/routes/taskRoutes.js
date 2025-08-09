// GET, POST, PUT, DELETE API end points for tasks
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

// Create a new task
router.post('/', taskController.createTask);

// List tasks
router.get('/', taskController.listTasks);

// Get a single task by ID
router.get('/:id', taskController.readTaskById);

// Update a task by ID
router.put('/:id', taskController.updateTask);

// Delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;