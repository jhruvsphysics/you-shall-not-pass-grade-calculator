const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task') 
const { ensureAuth } = require('../middleware/auth')

//id is courseId
router.post('/:id', ensureAuth, taskController.createTask)

module.exports = router