// Create operation function for goal
const { Goal } = require('../../model/dbSchema');

// Define and eport new async function to create a new goal
exports.createGoal = async (req, res) => {
    try {
        const newGoal = new Goal(req.body); // Create a new Goal instance with the request body
        await newGoal.save(); // Save the new goal to the database
        console.log('Goal created successfully: ', newGoal);
        res.status(201).json(newGoal); // Respond with the created goal and a 201 status code
    } catch (error) {
        console.error('Error creating goal: ', error);
        res.status(500).json({ error: 'Failed to create goal' });
    }
};
