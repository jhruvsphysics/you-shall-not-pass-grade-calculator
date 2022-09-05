const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  termId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Task', TaskSchema)