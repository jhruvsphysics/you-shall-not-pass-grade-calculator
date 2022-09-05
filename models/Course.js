const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  termId: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true
  },
  percentCompleted: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Course', CourseSchema)