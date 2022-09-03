const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  currentGrade: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Course', CourseSchema)