const Term = require('../models/Term')
const Course = require('../models/Course')
const Task = require('../models/Task')

module.exports = {
    createTask: async (req,res)=>{
        console.log(req.user.id)
        const courseSelected = await Course.find({_id: req.params.id})

        // Check if the user has access:
        if (courseSelected[0].userId !== req.user.id) {
            return res.redirect('/')
        }
        try{
            await Task.create({courseId: req.params.id, taskName: req.body.taskName, grade: 0, weight: req.body.weight, completed: false})
            console.log('Task has been added!')
            res.redirect(`/dashboard`)
        }catch(err){
            console.log(err)
        }
    }
} 