// Read operation function for goal
const { Goal } = require('../../model/dbSchema');
const mongoose = require('mongoose');

exports.readGoalById = async (req, res) => {
    try {
        // Validate id is valid MongoDb pbject before setting it to variable
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'Invalid goal ID format' });
        }
        // Find goal by ID from request parameters
        const goalId = await Goal.findById(req.params.id);
        // if goal not found, return 404
        if (!goalId) {
            return res.status(404).json({ error: 'Goal not found' });
        }

        res.status(200).json(goalId); // Respond with the found goal and a 200 status code
        console.log('Goal found successfully: ', goalId);
    } catch (error) {
        console.error('Error finding goal by ID: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};