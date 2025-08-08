// Delete operation function for goal
const { Goal } = require('../../model/dbSchema');
const mongoose = require('mongoose');

exports.deleteGoal = async (req, res) => {
    try {
        const goalId = req.params.id; // Get goal ID from request parameters
        // Throw invalid Id error if Id format is incorrect
        if (!mongoose.Types.ObjectId.isValid(goalId)) {
            return res.status(400).json({ error: 'Invalid goal ID format' });
        }
        const deletedGoal = await Goal.findByIdAndDelete(goalId); // Delete goal by ID
        // If goal not found, return 404
        if (!deletedGoal) {
            return res.status(404).json({ error: 'Goal not found' });
        }

        res.status(200).json({ message: 'Goal deleted successfully', goal: deletedGoal }); // Respond with success message and deleted goal
        console.log('Goal deleted successfully: ', deletedGoal);
    } catch (error) {
        console.error('Error deleting goal: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }   
};