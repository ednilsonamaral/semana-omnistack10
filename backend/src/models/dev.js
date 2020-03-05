const mongoose = require('mongoose')

const Point = require('./utils/point-schema')

const schema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  
  location: {
    type: Point,
    index: '2dsphere'
  }
})

module.exports = mongoose.model('Dev', schema)