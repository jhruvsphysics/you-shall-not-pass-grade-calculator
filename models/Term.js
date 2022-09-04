const mongoose = require('mongoose')

const TermSchema = new mongoose.Schema({
  termName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  Grade: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Term', TermSchema)