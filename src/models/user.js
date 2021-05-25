const mongoose = require('mongoose')

// USER SCHEMA
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
