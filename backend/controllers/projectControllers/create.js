// Create operation function for project
const { project } = require('../../model/dbSchema');

// Define and export new async function to create a new project
exports.createproject = async (req, res) => {
    try {
        const newproject = new project(req.body); // Create a new project instance with the request body
        await newproject.save(); // Save the new project to the database
        console.log('project created successfully: ', newproject);
        res.status(201).json(newproject); // Respond with the created project and a 201 status code
    } catch (error) {
        console.error('Error creating project: ', error);
        res.status(500).json({ error: 'Failed to create project' });
    }
};
