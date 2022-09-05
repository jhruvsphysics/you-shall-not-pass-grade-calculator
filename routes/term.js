const express = require('express')
const router = express.Router()
const termController = require('../controllers/term') 
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', ensureAuth, termController.getTerm)

router.post('/addCourse/:id', ensureAuth, termController.addCourse)
// router.delete('/deleteTerm', ensureAuth, dashboardController.deleteTerm)
// router.put('/markComplete', ensureAuth, dashboardController.markComplete)
// router.put('/markIncomplete', ensureAuth, dashboardController.markIncomplete)

module.exports = router