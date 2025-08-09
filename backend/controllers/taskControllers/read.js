// Read operation function for task
const { Task } = require('../../model/dbSchema');
const mongoose = require('mongoose');

exports.readTaskById = async (req, res) => {
    try{
        // Validate id is valid MongoDb object
        if (!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({ error: 'Invalid task ID format' });
        }
        const task = await Task.findById(req.params.id);
        // If task not found, return 404
        if(!task){
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task); // Respond with the found task and a 200 status code
        console.log('Task found successfully: ', task);
    } catch (error){
        console.error('Error validating task ID: ', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};