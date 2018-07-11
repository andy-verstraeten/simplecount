const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paidBy:  {
    type: String,
    required: true
  },
  paidFor: {
    type: [String],
    required: true
  },
  date: String
})

module.exports = ExpenseSchema
