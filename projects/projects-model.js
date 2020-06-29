const db = require('../data/db-config')

const findProjects = () => {
    return db("projects")
}

const findProjectsById = (projID) => {
    return db("projects as p")
            .where("p.id", projID)
}

const findTasksByProjectID = (projID) => {
    return db("tasks as t")
        .join("projects as p","p.id", "t.projectID")
        .where("t.projectID", projID)
        .select("t.id", "t.description", "p.name", "p.description")
}

const findTaskByTaskID = (projID, taskID) => {
    return db("tasks as t")
            .join("projects as p","p.id", "t.projectID")
            .where("t.projectID", projID)
            .where("t.id", taskID)
            .first("t.id", "t.description", "t.notes", "t.isCompleted")
}

const addProject = (project) => {
    return db('projects as p')
        .insert(projects)

}

const addTask = (projID, task) => {
    return db('tasks as t').insert(task).where('t.projectID', projID)

}

module.exports = {
    findProjects,
    findProjectsById,
    findTasksByProjectID,
    addProject,
    addTask
}