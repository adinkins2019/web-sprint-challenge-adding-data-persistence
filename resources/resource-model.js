const db = require('../data/db-config')

const findResources() = () => {
    return db('resources')
}

const findResourceByID = (resourceID) => {
    return db('resources as r').where('r.id', resourceID).first()
}

const addResource = (resource) => {
    return db('resources').insert(resource)
}
module.exports = {
    findResources,
    findResourceByID
}