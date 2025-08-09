// Read all operation function for goal
const { Goal } = require('../../model/dbSchema');

exports.listGoals = async (req, res) => {
    try {
        const goals = await Goal.find(); // Fetch all goals from the database
        res.status(200).json(goals); // Respond with the list of goals and a 200 status code
        console.log('Goals retrieved successfully: ', goals);

        if(goals.length === 0) {
            console.log('No goals found');
            return res.status(404).json({ message: 'No goals found' });
        }   
    } catch (error) {
        console.error('Error retrieving goals: ', error);
        res.status(500).json({ error: 'Failed to retrieve goals' });
    }
};