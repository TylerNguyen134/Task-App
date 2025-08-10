// GET, POST, PUT, DELETE API end points for projects
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectControllers');

// Create a new project
router.post('/', projectController.createproject);

// List projects
router.get('/', projectController.listprojects);

// Get a single project by ID
router.get('/:id', projectController.readprojectById);

// Update a project by ID
router.put('/:id', projectController.updateproject);

// Delete a project by ID
router.delete('/:id', projectController.deleteproject);

module.exports = router;