// Update operation function for project
const { project } = require("../../model/dbSchema");
const mongoose = require("mongoose");

exports.updateproject = async (req, res) => {
    try{
        // Throw invalid Id error if Id format is incorrect
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid project ID format" });
        }
        const projectId = req.params.id; // Get project ID from request parameters
        const updateData = req.body; // Get update data from request body
        const updatedproject = await project.findByIdAndUpdate(projectId, updateData, { new: true }); // Update project by ID and return the updated document
        // If project not found, return 404
        if (!updatedproject) {
            return res.status(404).json({ error: "project not found" });
        }

        res.status(200).json(updatedproject); // Respond with the updated project
        console.log("project updated successfully: ", updatedproject);
    } catch (error) {
        console.error("Error updating project: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};