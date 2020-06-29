const projectModel = require('./projects-model')
const express = require('express')
const router = express.Router()


router.get('/', async (req, res, next) => {
    try {
        const projects = await projectModel.findProjects()
        res.json(projects)
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next)=> {
    try {
        const project = await projectModel.findProjectsById(req.params.id)
        if(project){
            res.json(project)
        }
        else {
            res.status(404).json({message: "Project not found"})
        }
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next)=> {
    try {
        const payload = {
            "name": req.body.name,
            "description": req.body.description,
            "isCompleted": req.body.isCompleted
        
        }
        
        const project = await projectModel.addProject(payload)
        res.json(project)

    } catch(err){
        next(err)
    }
})

module.exports = router

