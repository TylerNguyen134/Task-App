// Update operation function for goal
const { Goal } = require('../../model/dbSchema');
const mongoose = require('mongoose');

exports.updateGoal = async (req, res) => {
    try{
        const goalId = req.params.id; // Get goal ID from request parameters
        const updateData = req.body; // Get update data from request body
        // Throw invalid Id error if Id format is incorrect
        if (!mongoose.Types.ObjectId.isValid(goalId)) {
            return res.status(400).json({ error: 'Invalid goal ID format' });
        }
        const updatedGoal = await Goal.findByIdAndUpdate(goalId, updateData, { new: true }); // Update goal by ID and return the updated document
        // If goal not found, return 404
        if (!updatedGoal) {
            return res.status(404).json({ error: 'Goal not found' });
        }

        res.status(200).json(updatedGoal); // Respond with the updated goal
        console.log('Goal updated successfully: ', updatedGoal);
    } catch (error) {
        console.error('Error updating goal: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};