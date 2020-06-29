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

const addProject = async (project) => {
    await db('projects as p')
        .insert(projects)

}

const addTasks = (projID) = {

}

module.exports = {
    findProjects,
    findProjectsById,
    findTasksByProjectID,
}