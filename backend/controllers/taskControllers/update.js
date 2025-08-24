// Update operation function for task
const { Task } = require("../../model/dbSchema");
const mongoose = require("mongoose");

exports.updateTask = async (req, res) => {
    try {
        const taskId = req.params.id; // Get task ID from request parameters

        // Validate id is valid MongoDb object
        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({ error: "Invalid task ID format" });
        }

        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true }); // Update task by Id and return the updated document
        // If task not found, return 404
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json(updatedTask); // Respond with the updated task and a 200 status code
        console.log("Task updated successfully: ", updatedTask);
    } catch (error) {
        console.error("Error updating task: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}