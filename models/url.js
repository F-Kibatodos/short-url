const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  website: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  }
})
module.exports = mongoose.model('Url', urlSchema)
