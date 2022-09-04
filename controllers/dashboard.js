const Term = require('../models/Term')

module.exports = {
    getDashboard: async (req,res)=>{
        console.log(req.user)
        try{
            const termItems = await Term.find({userId:req.user.id})
            res.render('dashboard.ejs', {terms: termItems, user: req.user})
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