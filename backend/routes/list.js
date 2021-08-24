require('dotenv').config()
const express = require('express')
const router = express.Router()
const listcontrollers = require('../controller/list')

//add list
router.post(
    '/addlist',
    listcontrollers.addlist
)

//get list
router.get(
    '/getlist',
    listcontrollers.getlists
)

//get single list
router.post(
    '/getsinglelist',
    listcontrollers.getsinglelist
)

//edit list
router.post(
    '/editlist',
    listcontrollers.editlist
)

//delete list
router.post(
    '/deletelist',
    listcontrollers.deletelist
)

module.exports = router