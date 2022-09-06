const Term = require('../models/Term')
const Course = require('../models/Course')

module.exports = {
    getDashboard: async (req,res)=>{
        console.log(req.user)
        let termSelected = []
        let courseItems = []
        if (req.query.termId) {
            termSelected = await Term.find({_id: req.query.termId})
            if (termSelected[0].userId !== req.user.id) {
                return res.redirect('/')
            }
            courseItems = await Course.find({termId: req.query.termId})
            console.log("courseItems", courseItems)
        }
        try{
            const termItems = await Term.find({userId:req.user.id})
            res.render('dashboard.ejs', {terms: termItems, user: req.user, termSelected: termSelected[0], courseItems: courseItems})
        }catch(err){
            console.log(err)
        }
    },
    getDashboardMobile: async (req,res)=>{
        console.log(req.user)
        try{
            const termItems = await Term.find({userId:req.user.id})
            const courseItems = await Course.find({userId:req.user.id})
            const coursePerTerm = {}
            termItems.forEach(term => {
                coursePerTerm[term] = courseItems.filter(course => (course.termId === term._id))
            })
            console.log(coursePerTerm)
            res.render('dashboard_mobile.ejs', {terms: termItems, courses: courseItems})
        }catch(err){
            console.log(err)
        }
    },
    getDashboardWithTermSelected: async (req, res) => {
        console.log(req.user)
        console.log('dashboard term selected')
        const termSelected = await Term.find({_id: req.params.id})
        const courseItems = await Course.find({termId: req.params.id})
        if (termSelected[0].userId !== req.user.id) {
            return res.redirect('/')
        }
        try{
            const termItems = await Term.find({userId:req.user.id})
            res.render('dashboard.ejs', {terms: termItems, user: req.user, termSelected: termSelected, courseItems: courseItems})
        }catch(err){
            console.log(err)
        }
    },
    createTerm: async (req, res)=>{
        console.log(req.body)
        try{
            await Term.create({termName: req.body.termName, completed: false, userId: req.user.id, grade: 0})
            console.log('Term has been added!')
            res.redirect('/dashboard')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Term.findOneAndUpdate({_id:req.body.termIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Term.findOneAndUpdate({_id:req.body.termIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTerm: async (req, res)=>{
        console.log(req.body.termIdFromJSFile)
        try{
            await Term.findOneAndDelete({_id:req.body.termIdFromJSFile})
            console.log('Deleted Term')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    