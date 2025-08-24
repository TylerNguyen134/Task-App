// Create operation function for task
const { Task } = require("../../model/dbSchema");

exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body); // Create a new Task instance with the request body
        await newTask.save();
        res.status(201).json(newTask);
        console.log("Task created successfully: ", newTask);
    } catch (error) {
        console.error("Error creating task: ", error);
        res.status(500).json({ error: "Failed to create task" });   
    }
};