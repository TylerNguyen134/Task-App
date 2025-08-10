/* This file: 
* Defines both project and task object structures for mongoDB
* Creates both project and task mongoDB schemas using the objects' structures
* Exports both project and Task models for use in other parts of the application
*/
const mongoose = require('mongoose');

// Define the structure of project documents in the database: taskObjects can be children stored in an array
const projectObject = {
    //MongoDB will automatically create an _id field for each document
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    targetDate: {
        type: String, // Make own date format: DD-MM-YYYY
        required: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    completed: {
        type: Boolean,
        default: false, // project is not completed by default
    },
};

// Define the structure of Task documents in the database: projectObject can be a parent object
const taskObject = {
    //MongoDB will automatically create an _id field for each document
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'], // Only allow these values
        required: true,
    },
    dateAssigned: {
        type: String, // Make own date format: DD-MM-YYYY, date will always be assigned when creating task
        required: true,
    },
    dateCompleted: {
        type: String, // Make own date format: DD-MM-YYYY, date will be assigned when task is completed
        required: false,
    },
    completed: {
        type: Boolean,
        default: false, // Task is not completed by default
    }
};

// project Schma for MongoDB: Pass in above projectObject structure
const projectSchema = new mongoose.Schema(projectObject);
// Task Schema for MongoDB: Pass in above taskObject structure
const taskSchema = new mongoose.Schema(taskObject);

//Export models
module.exports.project = mongoose.model('project', projectSchema);
module.exports.Task = mongoose.model('Task', taskSchema);
