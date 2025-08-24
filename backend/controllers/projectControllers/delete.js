// Delete operation function for project
const { project } = require("../../model/dbSchema");
const mongoose = require("mongoose");

exports.deleteproject = async (req, res) => {
    try {
        const projectId = req.params.id; // Get project ID from request parameters
        // Throw invalid Id error if Id format is incorrect
        if (!mongoose.Types.ObjectId.isValid(projectId)) {
            return res.status(400).json({ error: "Invalid project ID format" });
        }
        const deletedproject = await project.findByIdAndDelete(projectId); // Delete project by ID
        // If project not found, return 404
        if (!deletedproject) {
            return res.status(404).json({ error: "project not found" });
        }

        res.status(200).json({ message: "project deleted successfully", project: deletedproject }); // Respond with success message and deleted project
        console.log("project deleted successfully: ", deletedproject);
    } catch (error) {
        console.error("Error deleting project: ", error);
        res.status(500).json({ error: "Internal server error" });
    }   
};