const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number]
  }
})

const Point = schema

module.exports = Point