require('dotenv').config()
const express = require('express')
const router = express.Router()
const taskcontrollers = require('../controller/task')

//add task
router.post(
    '/add-task',
    taskcontrollers.addtask
)

//get single task
router.post(
    '/getsingletask',
    taskcontrollers.getsingletask
)

//edit task
router.post(
    '/edittask',
    taskcontrollers.edittask
)

//delete task
router.post(
    '/deletetask',
    taskcontrollers.deletetask
)

module.exports = router