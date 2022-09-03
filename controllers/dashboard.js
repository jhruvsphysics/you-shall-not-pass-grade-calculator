const Course = require('../models/Course')

module.exports = {
    getDashboard: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('dashboard.ejs', {})
        }catch(err){
            console.log(err)
        }
    }
}    