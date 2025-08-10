// Read all operation function for project
const { project } = require('../../model/dbSchema');

exports.listprojects = async (req, res) => {
    try {
        const projects = await project.find(); // Fetch all projects from the database
        res.status(200).json(projects); // Respond with the list of projects and a 200 status code
        console.log('projects retrieved successfully: ', projects);

        if(projects.length === 0) {
            console.log('No projects found');
            return res.status(404).json({ message: 'No projects found' });
        }   
    } catch (error) {
        console.error('Error retrieving projects: ', error);
        res.status(500).json({ error: 'Failed to retrieve projects' });
    }
};