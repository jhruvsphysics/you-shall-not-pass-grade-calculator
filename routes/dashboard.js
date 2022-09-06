const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, dashboardController.getDashboardMobile)
router.get('/mobile', ensureAuth, dashboardController.getDashboardMobile)

router.post('/createTerm', ensureAuth, dashboardController.createTerm)
router.delete('/deleteTerm', ensureAuth, dashboardController.deleteTerm)
router.put('/markComplete', ensureAuth, dashboardController.markComplete)
router.put('/markIncomplete', ensureAuth, dashboardController.markIncomplete)

module.exports = router