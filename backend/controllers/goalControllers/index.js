// Export all goal controller functions
const { createGoal } = require('./create');
const { readGoalById } = require('./read');
const { listGoals } = require('./list');
const { updateGoal } = require('./update');
const { deleteGoal } = require('./delete');


module.exports = {
    createGoal,
    readGoalById,
    listGoals,
    updateGoal,
    deleteGoal,
}