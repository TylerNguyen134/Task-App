// Export all task controller functions
const { createTask } = require('./create');
const { deleteTask } = require('./delete');
const { listTasks } = require('./list');
const { readTaskById } = require('./read');
const { updateTask } = require('./update');

module.exports = {
    createTask,
    deleteTask,
    listTasks,
    readTaskById,
    updateTask,
}