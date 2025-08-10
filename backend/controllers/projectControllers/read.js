// Read operation function for project
const { project } = require('../../model/dbSchema');
const mongoose = require('mongoose');

exports.readprojectById = async (req, res) => {
    try {
        // Validate id is valid MongoDb pbject before setting it to variable
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'Invalid project ID format' });
        }
        // Find project by ID from request parameters
        const project = await project.findById(req.params.id);
        // if project not found, return 404
        if (!project) {
            return res.status(404).json({ error: 'project not found' });
        }

        res.status(200).json(project); // Respond with the found project and a 200 status code
        console.log('project found successfully: ', project);
    } catch (error) {
        console.error('Error finding project by ID: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};