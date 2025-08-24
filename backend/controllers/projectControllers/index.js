// Export all project controller functions
const { createproject } = require("./create");
const { readprojectById } = require("./read");
const { listprojects } = require("./list");
const { updateproject } = require("./update");
const { deleteproject } = require("./delete");


module.exports = {
    createproject,
    readprojectById,
    listprojects,
    updateproject,
    deleteproject,
}