const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExpenseSchema = require('./expense')

const TrackerSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, 'name is required']
  },
  description: String,
  currency: String,
  participants: [String],
  expenses: [ExpenseSchema]
})

const Tracker = mongoose.model('tracker', TrackerSchema)

module.exports = Tracker

