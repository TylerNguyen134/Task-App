// Delete operation function for task
const { Task } = require("../../model/dbSchema");
const mongoose= require("mongoose");


exports.deleteTask = async(req, res) =>{
    try{
        const taskId = req.params.id; // Get task ID from request parameters

        // Check if the task ID is valid
        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({ error: "Invalid task ID format" });
        }

        const deleteTask = await Task.findByIdAndDelete(taskId); // Delete task by Id
        // If task not found, return 404
        if (!deleteTask) {
            return res.status(404).json({ error: "Task not found" });
        }
    } catch (error) {
        console.error("Error deleting task: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};