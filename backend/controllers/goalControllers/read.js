// Read operation function for goal
const { Goal } = require('../../model/dbSchema');

exports.readGoalById = async (req, res) => {
    try {
        const goalId = await Goal.findById(req.params.id); // Find goal by ID from request parameters
        // if goal not found, return 404
        if (!goalId) {
            return res.status(404).json({ error: 'Goal not found' });
        }
        res.status(200).json(goalbyId); // Respond with the found goal and a 200 status code
        console.log('Goal found successfully: ', goalId);
    } catch (error) {
        console.error('Error finding goal by ID: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};