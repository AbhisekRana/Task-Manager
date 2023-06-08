const schema = require('../models/task')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await schema.find({})
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg : error})
    }
    
}
const createTask = async (req,res) => {
    try {
        const tasks = await schema.create(req.body)
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg : error})
    }
}
const deleteTask = async (req,res) => {
    try {
        const { id: taskID } = req.params
        const tasks = await schema.findOneAndDelete({ _id: taskID })
        if(!tasks){
            res.status(500).json({msg : 'No taks with the given id'})
        }
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg : 'Wrong id'})
    }
}
const getTask = async (req,res) => {
    try {
        const { id: taskID } = req.params
        const tasks = await schema.findOne({ _id: taskID })
        if(!tasks){
            res.status(500).json({msg : 'No taks with the given id'})
        }
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg : 'Wrong id'})
    }
}
const updateTask = async (req,res) => {
    try {
        const { id: taskID } = req.params
        const tasks = await schema.findOneAndUpdate({ _id: taskID },req.body,{
            new : true,
            runValidators : true,
        })
        if(!tasks){
            res.status(500).json({msg : 'No taks with the given id'})
        }
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg : 'Wrong id'})
    }
}


module.exports = {getAllTasks,createTask,updateTask,deleteTask,getTask}