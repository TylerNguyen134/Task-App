// list opoeration fucnction for tasks
const { Task } = require('../../model/dbSchema');

exports.listTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); // Fetch all tasks from the database
        res.status(200).json(tasks); // Return the list of tasks as JSON
        console.log('Tasks fetched successfully: ', tasks);

        if(tasks.length === 0) {
            console.log('No tasks found');
            return res.status(404).json({ message: 'No tasks found' });
        }
    } catch (error) {
        console.error('Error fetching tasks: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}